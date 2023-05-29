import { m as createEffect, r as loop, v as vector3__, u as box3, x as line3, A as vector3, C as vector3_, bd as quaternion, q as getEditorActive, be as event } from './app/_nuxt/model-9bf70e2c.mjs';
import { g as getBVHMap } from './useBVHMap.mjs';
import 'vue';
import 'vue/server-renderer';

const bvhCameraSet = /* @__PURE__ */ new Set();
const [emitBeforeCameraLoop, onBeforeCameraLoop] = event();
createEffect(function() {
  const bvhArray = getBVHMap();
  if (!bvhArray.length) {
    const handle2 = loop(emitBeforeCameraLoop);
    return () => {
      handle2.cancel();
    };
  }
  const handle = loop(() => {
    emitBeforeCameraLoop();
    for (const cam of bvhCameraSet) {
      const capsuleRadius = 0.5;
      cam.updateMatrixWorld();
      const direction = cam.getWorldDirection(vector3__);
      const { start, end } = line3;
      end.copy(start.copy(cam.position));
      box3.makeEmpty();
      box3.expandByPoint(start);
      box3.min.addScalar(-capsuleRadius);
      box3.max.addScalar(capsuleRadius);
      const triPoint = vector3;
      const capsulePoint = vector3_;
      let distance = 0;
      let depth = 0;
      for (const boundsTree of bvhArray)
        boundsTree.shapecast({
          intersectsBounds: (box) => box.intersectsBox(box3),
          intersectsTriangle: (tri) => {
            distance = tri.closestPointToSegment(line3, triPoint, capsulePoint);
            if (distance < capsuleRadius) {
              depth = capsuleRadius - distance;
              start.addScaledVector(direction, depth);
              end.addScaledVector(direction, depth);
            }
          }
        });
      const deltaVector = start.sub(cam.position);
      const offset = Math.max(0, deltaVector.length() - 1e-5);
      deltaVector.normalize().multiplyScalar(offset);
      cam.position.add(deltaVector);
    }
  });
  return () => {
    handle.cancel();
  };
}, [getBVHMap]);
function setVisible(visible) {
  var _a;
  const target = this.targetState.get();
  if (target && target._visible === void 0)
    target.outerObject3d.visible = visible;
  for (const child of this.camera.children)
    if (((_a = child.userData.manager) === null || _a === void 0 ? void 0 : _a._visible) === void 0)
      child.visible = visible;
}
function enableBVHCamera() {
  if (this.done)
    return;
  const cam = this.camera;
  bvhCameraSet.add(cam);
  this.then(() => bvhCameraSet.delete(cam));
  let tooCloseOld = false;
  this.watch(onBeforeCameraLoop(() => {
    const origin = this.outerObject3d.getWorldPosition(vector3);
    const camPos = this.object3d.getWorldPosition(vector3_);
    const dist = camPos.distanceTo(origin);
    cam.position.lerp(camPos, 0.1);
    const ratio = cam.position.distanceTo(origin) / dist;
    cam.position.lerpVectors(origin, camPos, ratio);
    cam.quaternion.copy(this.object3d.getWorldQuaternion(quaternion));
    const tooClose = getEditorActive() ? false : ratio < 0.35;
    tooClose !== tooCloseOld && setVisible.call(this, !tooClose);
    tooCloseOld = tooClose;
  }));
}

export { enableBVHCamera as default };
//# sourceMappingURL=enableBVHCamera.mjs.map
