import { c as computeBVH, M as MeshBVHVisualizer } from './computeBVH.mjs';
import { p as pushBVHMap, a as pullBVHMap } from './useBVHMap.mjs';
import { s as scene, M as Mesh, w as wireframeMaterial } from './app/_nuxt/model-9bf70e2c.mjs';
import 'vue';
import 'vue/server-renderer';

async function enableBVHMap(handle, debug) {
  if (handle.done)
    return;
  scene.attach(this.outerObject3d);
  const [bvhMaps, geometries] = computeBVH(this);
  for (const bvhMap of bvhMaps)
    pushBVHMap(bvhMap);
  handle.then(() => {
    for (const bvhMap of bvhMaps)
      pullBVHMap(bvhMap);
  });
  if (debug)
    for (const geom of geometries) {
      const visualizer = new MeshBVHVisualizer(new Mesh(geom, wireframeMaterial), 20);
      scene.add(visualizer);
      handle.then(() => scene.remove(visualizer));
    }
}

export { enableBVHMap as default };
//# sourceMappingURL=enableBVHMap.mjs.map
