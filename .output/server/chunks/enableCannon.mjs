import { s as scene, l as loadCannon, c as cannonSet } from './app/_nuxt/model-9bf70e2c.mjs';
import 'vue';
import 'vue/server-renderer';

const physicsGroups = [1, 2, 4, 8, 16, 32];
const physicsGroupIndexes = [0, 1, 2, 3, 4, 5];
async function enableCannon(handle) {
  var _a, _b;
  if (handle.done)
    return;
  scene.attach(this.outerObject3d);
  const { slipperyMaterial, defaultMaterial, world, Body, Vec3 } = await loadCannon();
  if (handle.done)
    return;
  const body = this.cannonBody = new Body({
    mass: (_a = this._mass) !== null && _a !== void 0 ? _a : 1,
    material: this._slippery ? slipperyMaterial : defaultMaterial,
    collisionFilterGroup: physicsGroups[(_b = this._physicsGroup) !== null && _b !== void 0 ? _b : 0],
    collisionFilterMask: physicsGroupIndexes.filter((index) => {
      var _a2;
      return !((_a2 = this._ignorePhysicsGroups) === null || _a2 === void 0 ? void 0 : _a2.includes(index));
    }).map((index) => physicsGroups[index]).reduce((acc, curr) => acc + curr, 0)
  });
  await this.physicsShape();
  if (handle.done)
    return;
  if (this._physics === "2d") {
    body.angularFactor = new Vec3(0, 0, 1);
    body.linearFactor = new Vec3(1, 1, 0);
  }
  if (this._noTumble)
    body.angularFactor = new Vec3(0, 0, 0);
  body.position.copy(this.outerObject3d.position);
  body.quaternion.copy(this.outerObject3d.quaternion);
  this.physicsUpdate = {};
  world.addBody(body);
  cannonSet.add(this);
  handle.then(() => {
    world.removeBody(body);
    cannonSet.delete(this);
    this.cannonBody = void 0;
    this.physicsUpdate = void 0;
  });
}

export { enableCannon as default };
//# sourceMappingURL=enableCannon.mjs.map
