import { j as store, Y as getCamera, Z as setPickingMode, _ as mouseEvents, $ as container } from './app/_nuxt/model-9bf70e2c.mjs';
import 'vue';
import 'vue/server-renderer';

const [setPointerLockCamera, getPointerLockCamera] = store(void 0);
function enableMouseControl() {
  if (this.done)
    return;
  this.createEffect(() => {
    if (this.mouseControlState.get() !== true || getCamera() !== this.camera)
      return;
    setPickingMode("camera");
    return () => {
      setPickingMode("mouse");
    };
  }, [this.mouseControlState.get, getCamera]);
  this.createEffect(() => {
    if (getCamera() !== this.camera || !this.mouseControlState.get())
      return;
    if (getPointerLockCamera() === this.camera) {
      const handleMove2 = (e) => this.gyrate(e.movementX, e.movementY);
      document.addEventListener("mousemove", handleMove2);
      return () => {
        document.removeEventListener("mousemove", handleMove2);
      };
    }
    let started = false;
    let [xOld, yOld] = [0, 0];
    const handle0 = mouseEvents.on("down", (e) => (started = true, [xOld, yOld] = [e.clientX, e.clientY]));
    const handle1 = mouseEvents.on("up", () => started = false);
    const handleMove = (e) => {
      if (e.movementX === void 0) {
        const [movementX, movementY] = [e.clientX - xOld, e.clientY - yOld];
        [xOld, yOld] = [e.clientX, e.clientY];
        started && this.gyrate(movementX * 2, movementY * 2);
        return;
      }
      started && this.gyrate(e.movementX * 2, e.movementY * 2);
    };
    container.addEventListener("pointermove", handleMove);
    return () => {
      handle0.cancel();
      handle1.cancel();
      container.removeEventListener("pointermove", handleMove);
      started = false;
    };
  }, [this.mouseControlState.get, getCamera, getPointerLockCamera]);
  this.createEffect(() => {
    const camera = getCamera();
    if (this.mouseControlState.get() !== true || camera !== this.camera)
      return;
    const onClick = () => {
      var _a;
      return (_a = container.requestPointerLock) === null || _a === void 0 ? void 0 : _a.call(container);
    };
    const onPointerLockChange = () => {
      if (document.pointerLockElement === container)
        setPointerLockCamera(camera);
      else
        setPointerLockCamera(void 0);
    };
    container.addEventListener("click", onClick);
    document.addEventListener("pointerlockchange", onPointerLockChange);
    return () => {
      container.removeEventListener("click", onClick);
      document.removeEventListener("pointerlockchange", onPointerLockChange);
      document.exitPointerLock();
      setPointerLockCamera(void 0);
    };
  }, [this.mouseControlState.get, getCamera]);
}

export { enableMouseControl as default };
//# sourceMappingURL=enableMouseControl.mjs.map
