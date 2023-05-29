import { m as createEffect, n as getGravity, o as getRepulsion, q as getEditorActive, r as loop, t as bvhContactMap, u as box3, v as vector3__, x as line3, y as forceGet, s as scene, z as getActualScale, V as Vector3, A as vector3, C as vector3_ } from './app/_nuxt/model-9bf70e2c.mjs';
import { g as getBVHMap } from './useBVHMap.mjs';
import { b as bvhManagerMap } from './computeBVH.mjs';
import 'vue';
import 'vue/server-renderer';

const bvhCharacterSet = /* @__PURE__ */ new Set();
const makeWeakSet = () => /* @__PURE__ */ new WeakSet();
createEffect(function() {
  if (getEditorActive())
    return;
  const bvhArray = getBVHMap();
  if (!bvhArray.length)
    return;
  const gravity = getGravity();
  const repulsion = getRepulsion();
  const delta = 0.02;
  const handle = loop(() => {
    bvhContactMap.clear();
    for (const characterManager of bvhCharacterSet) {
      const playerVelocity = characterManager.bvhVelocity;
      const player = characterManager.outerObject3d;
      const capsuleHalfHeight = characterManager.bvhHalfHeight;
      const capsuleRadius = characterManager.bvhRadius;
      playerVelocity.y += characterManager.bvhOnGround ? 0 : delta * -gravity;
      const { position } = characterManager.physicsUpdate;
      characterManager.physicsUpdate = {};
      if (position) {
        position.x && (playerVelocity.x = 0);
        position.y && (playerVelocity.y = 0);
        position.z && (playerVelocity.z = 0);
      }
      player.position.addScaledVector(playerVelocity, delta);
      player.updateMatrixWorld();
      const { start, end } = line3;
      end.copy(start.copy(player.position));
      const yOffset = Math.max(capsuleHalfHeight - capsuleRadius, 0);
      end.y += yOffset;
      start.y -= yOffset;
      const startOld = start.clone();
      box3.setFromCenterAndSize(player.position, vector3__.set(capsuleRadius * 2, capsuleHalfHeight * 2, capsuleRadius * 2));
      const triPoint = vector3;
      const capsulePoint = vector3_;
      let distance = 0;
      let direction;
      let contact = false;
      let mapManager;
      for (const boundsTree of bvhArray) {
        mapManager = bvhManagerMap.get(boundsTree);
        boundsTree.shapecast({
          intersectsBounds: (box) => box.intersectsBox(box3),
          intersectsTriangle: (tri) => {
            distance = tri.closestPointToSegment(line3, triPoint, capsulePoint);
            if (distance < capsuleRadius) {
              contact = true;
              direction = capsulePoint.sub(triPoint).normalize().multiplyScalar(capsuleRadius - distance);
              start.add(direction);
              end.add(direction);
            }
          }
        });
      }
      if (contact && mapManager)
        forceGet(bvhContactMap, characterManager, makeWeakSet).add(mapManager);
      const deltaVector = start.sub(startOld);
      characterManager.bvhOnGround = deltaVector.y > Math.abs(delta * playerVelocity.y * 0.25);
      if (repulsion && characterManager.bvhOnGround) {
        if (Math.abs(deltaVector.y / (deltaVector.x + deltaVector.z + Number.EPSILON)) < repulsion)
          characterManager.bvhOnGround = false;
      }
      const offset = Math.max(0, deltaVector.length() - 1e-5);
      deltaVector.normalize().multiplyScalar(offset);
      player.position.add(deltaVector);
      if (!characterManager.bvhOnGround) {
        deltaVector.normalize();
        playerVelocity.addScaledVector(deltaVector, -deltaVector.dot(playerVelocity));
      } else
        playerVelocity.set(0, 0, 0);
    }
  });
  return () => {
    handle.cancel();
  };
}, [getBVHMap, getGravity, getRepulsion, getEditorActive]);
function enableBVHCharacter(handle) {
  if (handle.done)
    return;
  scene.attach(this.outerObject3d);
  this.width = this.depth = Math.min(this.width, this.depth);
  this.physicsUpdate = {};
  const actualScale = getActualScale(this).multiplyScalar(0.5);
  this.bvhHalfHeight = Math.max(actualScale.y, 0.5);
  this.bvhRadius = Math.max(actualScale.x, 0.5);
  this.bvhVelocity = new Vector3();
  bvhCharacterSet.add(this);
  handle.then(() => {
    bvhCharacterSet.delete(this);
    this.physicsUpdate = void 0;
  });
}

export { enableBVHCharacter as default };
//# sourceMappingURL=enableBVHCharacter.mjs.map
