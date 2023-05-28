import { b1 as Camera$1, aa as Color, a as Matrix4, aJ as MeshStandardMaterial, e as Plane$1, V as Vector3, aq as Vector4, ag as PerspectiveCamera, aF as LinearFilter, b2 as WebGLRenderTarget, b3 as DepthTexture, b4 as DepthFormat, b5 as UnsignedShortType, b6 as UnsignedByteType, ab as sRGBEncoding, b7 as ShaderMaterial, b8 as Uniform, h as Vector2, b9 as NoBlending, ba as Scene$1, M as Mesh, bb as BasicDepthPacking, bc as EventDispatcher, g as BufferGeometry, f as BufferAttribute } from './app/_nuxt/model-9bf70e2c.mjs';
import 'vue';
import 'vue/server-renderer';

/**
 * postprocessing v6.27.0 build Fri May 27 2022
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2022 Raoul van Rüschen
 * @license Zlib
 */
var common_default = "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}";
var KernelSize = {
  VERY_SMALL: 0,
  SMALL: 1,
  MEDIUM: 2,
  LARGE: 3,
  VERY_LARGE: 4,
  HUGE: 5
};
var convolution_kawase_default = "#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\nvarying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;\n#include <encodings_fragment>\n}";
var convolution_kawase_default2 = "uniform vec4 texelSize;uniform float kernel;uniform vec2 scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale.x*scale.y;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}";
var kernelPresets = [
  new Float32Array([0, 0]),
  new Float32Array([0, 1, 1]),
  new Float32Array([0, 1, 1, 2]),
  new Float32Array([0, 1, 2, 2, 3]),
  new Float32Array([0, 1, 2, 3, 4, 4, 5]),
  new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])
];
var KawaseBlurMaterial = class extends ShaderMaterial {
  constructor(texelSize = new Vector4()) {
    super({
      name: "KawaseBlurMaterial",
      uniforms: {
        inputBuffer: new Uniform(null),
        texelSize: new Uniform(new Vector4()),
        scale: new Uniform(new Vector2(1, 1)),
        kernel: new Uniform(0)
      },
      blending: NoBlending,
      depthWrite: false,
      depthTest: false,
      fragmentShader: convolution_kawase_default,
      vertexShader: convolution_kawase_default2
    });
    this.toneMapped = false;
    this.setTexelSize(texelSize.x, texelSize.y);
    this.kernelSize = KernelSize.MEDIUM;
  }
  set inputBuffer(value) {
    this.uniforms.inputBuffer.value = value;
  }
  setInputBuffer(value) {
    this.inputBuffer = value;
  }
  get kernelSequence() {
    return kernelPresets[this.kernelSize];
  }
  set resolutionScale(value) {
    this.uniforms.scale.value.x = value;
  }
  get scale() {
    return this.uniforms.scale.value.y;
  }
  set scale(value) {
    this.uniforms.scale.value.y = value;
  }
  getScale() {
    return this.uniforms.scale.value;
  }
  setScale(value) {
    this.uniforms.scale.value = value;
  }
  getKernel() {
    return null;
  }
  get kernel() {
    return this.uniforms.kernel.value;
  }
  set kernel(value) {
    this.uniforms.kernel.value = value;
  }
  setKernel(value) {
    this.kernel = value;
  }
  setTexelSize(x, y) {
    this.uniforms.texelSize.value.set(x, y, x * 0.5, y * 0.5);
  }
  setSize(width, height) {
    const x = 1 / width, y = 1 / height;
    this.uniforms.texelSize.value.set(x, y, x * 0.5, y * 0.5);
  }
};
var copy_default = "#include <common>\n#include <dithering_pars_fragment>\n#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\nuniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;\n#include <encodings_fragment>\n#include <dithering_fragment>\n}";
var CopyMaterial = class extends ShaderMaterial {
  constructor() {
    super({
      name: "CopyMaterial",
      uniforms: {
        inputBuffer: new Uniform(null),
        opacity: new Uniform(1)
      },
      blending: NoBlending,
      depthWrite: false,
      depthTest: false,
      fragmentShader: copy_default,
      vertexShader: common_default
    });
    this.toneMapped = false;
  }
  set inputBuffer(value) {
    this.uniforms.inputBuffer.value = value;
  }
  setInputBuffer(value) {
    this.uniforms.inputBuffer.value = value;
  }
  getOpacity(value) {
    return this.uniforms.opacity.value;
  }
  setOpacity(value) {
    this.uniforms.opacity.value = value;
  }
};
var dummyCamera = new Camera$1();
var geometry = null;
function getFullscreenTriangle() {
  if (geometry === null) {
    const vertices = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]);
    const uvs = new Float32Array([0, 0, 2, 0, 0, 2]);
    geometry = new BufferGeometry();
    if (geometry.setAttribute !== void 0) {
      geometry.setAttribute("position", new BufferAttribute(vertices, 3));
      geometry.setAttribute("uv", new BufferAttribute(uvs, 2));
    } else {
      geometry.addAttribute("position", new BufferAttribute(vertices, 3));
      geometry.addAttribute("uv", new BufferAttribute(uvs, 2));
    }
  }
  return geometry;
}
var Pass = class {
  constructor(name = "Pass", scene = new Scene$1(), camera = dummyCamera) {
    this.name = name;
    this.renderer = null;
    this.scene = scene;
    this.camera = camera;
    this.screen = null;
    this.rtt = true;
    this.needsSwap = true;
    this.needsDepthTexture = false;
    this.enabled = true;
  }
  get renderToScreen() {
    return !this.rtt;
  }
  set renderToScreen(value) {
    if (this.rtt === value) {
      const material = this.getFullscreenMaterial();
      if (material !== null) {
        material.needsUpdate = true;
      }
      this.rtt = !value;
    }
  }
  setRenderer(renderer) {
    this.renderer = renderer;
  }
  isEnabled() {
    return this.enabled;
  }
  setEnabled(value) {
    this.enabled = value;
  }
  get fullscreenMaterial() {
    return this.screen !== null ? this.screen.material : null;
  }
  set fullscreenMaterial(value) {
    let screen = this.screen;
    if (screen !== null) {
      screen.material = value;
    } else {
      screen = new Mesh(getFullscreenTriangle(), value);
      screen.frustumCulled = false;
      if (this.scene === null) {
        this.scene = new Scene$1();
      }
      this.scene.add(screen);
      this.screen = screen;
    }
  }
  getFullscreenMaterial() {
    return this.fullscreenMaterial;
  }
  setFullscreenMaterial(value) {
    this.fullscreenMaterial = value;
  }
  getDepthTexture() {
    return null;
  }
  setDepthTexture(depthTexture, depthPacking = BasicDepthPacking) {
  }
  render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
    throw new Error("Render method not implemented!");
  }
  setSize(width, height) {
  }
  initialize(renderer, alpha, frameBufferType) {
  }
  dispose() {
    for (const key of Object.keys(this)) {
      const property = this[key];
      if (property !== null && typeof property.dispose === "function") {
        if (property instanceof Scene$1 || property === this.renderer) {
          continue;
        }
        this[key].dispose();
      }
    }
  }
};
new Color();
var AUTO_SIZE = -1;
var Resolution = class extends EventDispatcher {
  constructor(resizable, width = AUTO_SIZE, height = AUTO_SIZE, scale = 1) {
    super();
    this.resizable = resizable;
    this.base = new Vector2(1, 1);
    this.preferred = new Vector2(width, height);
    this.target = this.preferred;
    this.s = scale;
  }
  get width() {
    const { base, preferred, scale } = this;
    let result;
    if (preferred.width !== AUTO_SIZE) {
      result = preferred.width;
    } else if (preferred.height !== AUTO_SIZE) {
      result = Math.round(preferred.height * (base.width / Math.max(base.height, 1)));
    } else {
      result = Math.round(base.width * scale);
    }
    return result;
  }
  set width(value) {
    this.preferredWidth = value;
  }
  get height() {
    const { base, preferred, scale } = this;
    let result;
    if (preferred.height !== AUTO_SIZE) {
      result = preferred.height;
    } else if (preferred.width !== AUTO_SIZE) {
      result = Math.round(preferred.width / Math.max(base.width / Math.max(base.height, 1), 1));
    } else {
      result = Math.round(base.height * scale);
    }
    return result;
  }
  set height(value) {
    this.preferredHeight = value;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  get scale() {
    return this.s;
  }
  set scale(value) {
    if (this.s !== value) {
      this.s = value;
      this.preferred.setScalar(AUTO_SIZE);
      this.dispatchEvent({ type: "change" });
      this.resizable.setSize(this.base.width, this.base.height);
    }
  }
  getScale() {
    return this.scale;
  }
  setScale(value) {
    this.scale = value;
  }
  get baseWidth() {
    return this.base.width;
  }
  set baseWidth(value) {
    if (this.base.width !== value) {
      this.base.width = value;
      this.dispatchEvent({ type: "change" });
      this.resizable.setSize(this.base.width, this.base.height);
    }
  }
  getBaseWidth() {
    return this.base.width;
  }
  setBaseWidth(value) {
    if (this.base.width !== value) {
      this.base.width = value;
      this.dispatchEvent({ type: "change" });
      this.resizable.setSize(this.base.width, this.base.height);
    }
  }
  get baseHeight() {
    return this.base.height;
  }
  set baseHeight(value) {
    if (this.base.height !== value) {
      this.base.height = value;
      this.dispatchEvent({ type: "change" });
      this.resizable.setSize(this.base.width, this.base.height);
    }
  }
  getBaseHeight() {
    return this.baseHeight;
  }
  setBaseHeight(value) {
    this.baseHeight = value;
  }
  setBaseSize(width, height) {
    if (this.base.width !== width || this.base.height !== height) {
      this.base.set(width, height);
      this.dispatchEvent({ type: "change" });
      this.resizable.setSize(this.base.width, this.base.height);
    }
  }
  get preferredWidth() {
    return this.preferred.width;
  }
  set preferredWidth(value) {
    if (this.preferred.width !== value) {
      this.preferred.width = value;
      this.dispatchEvent({ type: "change" });
      this.resizable.setSize(this.base.width, this.base.height);
    }
  }
  getPreferredWidth() {
    return this.preferredWidth;
  }
  setPreferredWidth(value) {
    this.preferredWidth = value;
  }
  get preferredHeight() {
    return this.preferred.height;
  }
  set preferredHeight(value) {
    if (this.preferred.height !== value) {
      this.preferred.height = value;
      this.dispatchEvent({ type: "change" });
      this.resizable.setSize(this.base.width, this.base.height);
    }
  }
  getPreferredHeight() {
    return this.preferredHeight;
  }
  setPreferredHeight(value) {
    this.preferredHeight = value;
  }
  setPreferredSize(width, height) {
    if (this.preferred.width !== width || this.preferred.height !== height) {
      this.preferred.set(width, height);
      this.dispatchEvent({ type: "change" });
      this.resizable.setSize(this.base.width, this.base.height);
    }
  }
  copy(resolution) {
    this.base.set(resolution.getBaseWidth(), resolution.getBaseHeight());
    this.preferred.set(resolution.getPreferredWidth(), resolution.getPreferredHeight());
    this.dispatchEvent({ type: "change" });
    this.resizable.setSize(this.base.width, this.base.height);
  }
  static get AUTO_SIZE() {
    return AUTO_SIZE;
  }
};
var KawaseBlurPass = class extends Pass {
  constructor({
    kernelSize = KernelSize.MEDIUM,
    resolutionScale = 0.5,
    width = Resolution.AUTO_SIZE,
    height = Resolution.AUTO_SIZE,
    resolutionX = width,
    resolutionY = height
  } = {}) {
    super("KawaseBlurPass");
    this.renderTargetA = new WebGLRenderTarget(1, 1, {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      stencilBuffer: false,
      depthBuffer: false
    });
    this.renderTargetA.texture.name = "Blur.Target.A";
    this.renderTargetB = this.renderTargetA.clone();
    this.renderTargetB.texture.name = "Blur.Target.B";
    const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
    resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
    this.blurMaterial = new KawaseBlurMaterial();
    this.copyMaterial = new CopyMaterial();
  }
  getResolution() {
    return this.resolution;
  }
  get dithering() {
    return this.copyMaterial.dithering;
  }
  set dithering(value) {
    this.copyMaterial.dithering = value;
  }
  get kernelSize() {
    return this.blurMaterial.kernelSize;
  }
  set kernelSize(value) {
    this.blurMaterial.kernelSize = value;
  }
  get width() {
    return this.resolution.width;
  }
  set width(value) {
    this.resolution.preferredWidth = value;
  }
  get height() {
    return this.resolution.height;
  }
  set height(value) {
    this.resolution.preferredHeight = value;
  }
  get scale() {
    return this.blurMaterial.scale;
  }
  set scale(value) {
    this.blurMaterial.scale = value;
  }
  getScale() {
    return this.blurMaterial.scale;
  }
  setScale(value) {
    this.blurMaterial.scale = value;
  }
  getKernelSize() {
    return this.kernelSize;
  }
  setKernelSize(value) {
    this.kernelSize = value;
  }
  getResolutionScale() {
    return this.resolution.scale;
  }
  setResolutionScale(scale) {
    this.resolution.scale = scale;
  }
  render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
    const scene = this.scene;
    const camera = this.camera;
    const renderTargetA = this.renderTargetA;
    const renderTargetB = this.renderTargetB;
    const material = this.blurMaterial;
    const kernelSequence = material.kernelSequence;
    let previousBuffer = inputBuffer;
    this.fullscreenMaterial = material;
    for (let i = 0, l = kernelSequence.length; i < l; ++i) {
      const buffer = (i & 1) === 0 ? renderTargetA : renderTargetB;
      material.kernel = kernelSequence[i];
      material.inputBuffer = previousBuffer.texture;
      renderer.setRenderTarget(buffer);
      renderer.render(scene, camera);
      previousBuffer = buffer;
    }
    this.fullscreenMaterial = this.copyMaterial;
    this.copyMaterial.inputBuffer = previousBuffer.texture;
    renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
    renderer.render(scene, camera);
  }
  setSize(width, height) {
    const resolution = this.resolution;
    resolution.setBaseSize(width, height);
    const w = resolution.width, h = resolution.height;
    this.renderTargetA.setSize(w, h);
    this.renderTargetB.setSize(w, h);
    this.blurMaterial.setSize(w, h);
    this.blurMaterial.resolutionScale = resolution.scale;
  }
  initialize(renderer, alpha, frameBufferType) {
    if (frameBufferType !== void 0) {
      this.renderTargetA.texture.type = frameBufferType;
      this.renderTargetB.texture.type = frameBufferType;
      if (frameBufferType !== UnsignedByteType) {
        this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      } else if (renderer.outputEncoding === sRGBEncoding) {
        this.renderTargetA.texture.encoding = sRGBEncoding;
        this.renderTargetB.texture.encoding = sRGBEncoding;
      }
    }
  }
  static get AUTO_SIZE() {
    return Resolution.AUTO_SIZE;
  }
};
new Matrix4();
new Color();
class MeshReflectorMaterial extends MeshStandardMaterial {
  constructor(renderer, camera, scene, object, { mixBlur = 0, mixStrength = 1, resolution = 256, blur = [0, 0], minDepthThreshold = 0.9, maxDepthThreshold = 1, depthScale = 0, depthToBlurRatioBias = 0.25, mirror = 0, distortion = 1, mixContrast = 1, distortionMap, reflectorOffset = 0, bufferSamples = 8, planeNormal = new Vector3(0, 0, 1) } = {}) {
    super();
    this.gl = renderer;
    this.camera = camera;
    this.scene = scene;
    this.parent = object;
    this.hasBlur = blur[0] + blur[1] > 0;
    this.reflectorPlane = new Plane$1();
    this.normal = new Vector3();
    this.reflectorWorldPosition = new Vector3();
    this.cameraWorldPosition = new Vector3();
    this.rotationMatrix = new Matrix4();
    this.lookAtPosition = new Vector3(0, -1, 0);
    this.clipPlane = new Vector4();
    this.view = new Vector3();
    this.target = new Vector3();
    this.q = new Vector4();
    this.textureMatrix = new Matrix4();
    this.virtualCamera = new PerspectiveCamera();
    this.reflectorOffset = reflectorOffset;
    this.planeNormal = planeNormal;
    this.setupBuffers(resolution, blur, bufferSamples);
    this.reflectorProps = {
      mirror,
      textureMatrix: this.textureMatrix,
      mixBlur,
      tDiffuse: this.fbo1.texture,
      tDepth: this.fbo1.depthTexture,
      tDiffuseBlur: this.fbo2.texture,
      hasBlur: this.hasBlur,
      mixStrength,
      minDepthThreshold,
      maxDepthThreshold,
      depthScale,
      depthToBlurRatioBias,
      distortion,
      distortionMap,
      mixContrast,
      "defines-USE_BLUR": this.hasBlur ? "" : void 0,
      "defines-USE_DEPTH": depthScale > 0 ? "" : void 0,
      "defines-USE_DISTORTION": distortionMap ? "" : void 0
    };
  }
  setupBuffers(resolution, blur, bufferSamples) {
    const parameters = {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      encoding: this.gl.outputEncoding
    };
    const fbo1 = new WebGLRenderTarget(resolution, resolution, parameters);
    fbo1.depthBuffer = true;
    fbo1.depthTexture = new DepthTexture(resolution, resolution);
    fbo1.depthTexture.format = DepthFormat;
    fbo1.depthTexture.type = UnsignedShortType;
    const fbo2 = new WebGLRenderTarget(resolution, resolution, parameters);
    if (this.gl.capabilities.isWebGL2) {
      fbo1.samples = bufferSamples;
    }
    this.fbo1 = fbo1;
    this.fbo2 = fbo2;
    this.kawaseBlurPass = new KawaseBlurPass();
    this.kawaseBlurPass.setSize(blur[0], blur[1]);
  }
  beforeRender() {
    if (!this.parent)
      return;
    this.reflectorWorldPosition.setFromMatrixPosition(this.parent.matrixWorld);
    this.cameraWorldPosition.setFromMatrixPosition(this.camera.matrixWorld);
    this.rotationMatrix.extractRotation(this.parent.matrixWorld);
    this.normal.copy(this.planeNormal);
    this.normal.applyMatrix4(this.rotationMatrix);
    this.reflectorWorldPosition.addScaledVector(this.normal, this.reflectorOffset);
    this.view.subVectors(this.reflectorWorldPosition, this.cameraWorldPosition);
    if (this.view.dot(this.normal) > 0)
      return;
    this.view.reflect(this.normal).negate();
    this.view.add(this.reflectorWorldPosition);
    this.rotationMatrix.extractRotation(this.camera.matrixWorld);
    this.lookAtPosition.set(0, 0, -1);
    this.lookAtPosition.applyMatrix4(this.rotationMatrix);
    this.lookAtPosition.add(this.cameraWorldPosition);
    this.target.subVectors(this.reflectorWorldPosition, this.lookAtPosition);
    this.target.reflect(this.normal).negate();
    this.target.add(this.reflectorWorldPosition);
    this.virtualCamera.position.copy(this.view);
    this.virtualCamera.up.set(0, 1, 0);
    this.virtualCamera.up.applyMatrix4(this.rotationMatrix);
    this.virtualCamera.up.reflect(this.normal);
    this.virtualCamera.lookAt(this.target);
    this.virtualCamera.far = this.camera.far;
    this.virtualCamera.updateMatrixWorld();
    this.virtualCamera.projectionMatrix.copy(this.camera.projectionMatrix);
    this.textureMatrix.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
    this.textureMatrix.multiply(this.virtualCamera.projectionMatrix);
    this.textureMatrix.multiply(this.virtualCamera.matrixWorldInverse);
    this.textureMatrix.multiply(this.parent.matrixWorld);
    this.reflectorPlane.setFromNormalAndCoplanarPoint(this.normal, this.reflectorWorldPosition);
    this.reflectorPlane.applyMatrix4(this.virtualCamera.matrixWorldInverse);
    this.clipPlane.set(this.reflectorPlane.normal.x, this.reflectorPlane.normal.y, this.reflectorPlane.normal.z, this.reflectorPlane.constant);
    const projectionMatrix = this.virtualCamera.projectionMatrix;
    this.q.x = (Math.sign(this.clipPlane.x) + projectionMatrix.elements[8]) / projectionMatrix.elements[0];
    this.q.y = (Math.sign(this.clipPlane.y) + projectionMatrix.elements[9]) / projectionMatrix.elements[5];
    this.q.z = -1;
    this.q.w = (1 + projectionMatrix.elements[10]) / projectionMatrix.elements[14];
    this.clipPlane.multiplyScalar(2 / this.clipPlane.dot(this.q));
    projectionMatrix.elements[2] = this.clipPlane.x;
    projectionMatrix.elements[6] = this.clipPlane.y;
    projectionMatrix.elements[10] = this.clipPlane.z + 1;
    projectionMatrix.elements[14] = this.clipPlane.w;
  }
  update() {
    if (this.parent.material !== this)
      return;
    this.parent.visible = false;
    const currentXrEnabled = this.gl.xr.enabled;
    const currentShadowAutoUpdate = this.gl.shadowMap.autoUpdate;
    this.beforeRender();
    this.gl.xr.enabled = false;
    this.gl.shadowMap.autoUpdate = false;
    this.gl.setRenderTarget(this.fbo1);
    this.gl.state.buffers.depth.setMask(true);
    if (!this.gl.autoClear)
      this.gl.clear();
    this.gl.render(this.scene, this.virtualCamera);
    if (this.hasBlur) {
      this.kawaseBlurPass.render(this.gl, this.fbo1, this.fbo2);
    }
    this.gl.xr.enabled = currentXrEnabled;
    this.gl.shadowMap.autoUpdate = currentShadowAutoUpdate;
    this.parent.visible = true;
    this.gl.setRenderTarget(null);
  }
  onBeforeCompile(shader, ...args) {
    super.onBeforeCompile(shader, ...args);
    if (this.defines === void 0)
      this.defines = {};
    if (!this.defines.USE_UV) {
      this.defines.USE_UV = "";
    }
    if (this.reflectorProps["defines-USE_BLUR"] !== void 0)
      this.defines.USE_BLUR = "";
    if (this.reflectorProps["defines-USE_DEPTH"] !== void 0)
      this.defines.USE_DEPTH = "";
    if (this.reflectorProps["defines-USE_DISTORTION"] !== void 0)
      this.defines.USE_DISTORTION = "";
    let props = this.reflectorProps;
    for (let prop in props) {
      shader.uniforms[prop] = {
        get value() {
          return props[prop];
        }
      };
    }
    shader.vertexShader = `
              uniform mat4 textureMatrix;
              varying vec4 my_vUv;     
            ${shader.vertexShader}`;
    shader.vertexShader = shader.vertexShader.replace("#include <project_vertex>", `
            #include <project_vertex>
            my_vUv = textureMatrix * vec4( position, 1.0 );
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            `);
    shader.fragmentShader = `
              uniform sampler2D tDiffuse;
              uniform sampler2D tDiffuseBlur;
              uniform sampler2D tDepth;
              uniform sampler2D distortionMap;
              uniform float distortion;
              uniform float cameraNear;
              uniform float cameraFar;
              uniform bool hasBlur;
              uniform float mixBlur;
              uniform float mirror;
              uniform float mixStrength;
              uniform float minDepthThreshold;
              uniform float maxDepthThreshold;
              uniform float mixContrast;
              uniform float depthScale;
              uniform float depthToBlurRatioBias;
              varying vec4 my_vUv;        
              ${shader.fragmentShader}`;
    shader.fragmentShader = shader.fragmentShader.replace("#include <emissivemap_fragment>", `
            #include <emissivemap_fragment>
          
            float distortionFactor = 0.0;
            #ifdef USE_DISTORTION
              distortionFactor = texture2D(distortionMap, vUv).r * distortion;
            #endif
      
            vec4 new_vUv = my_vUv;
            new_vUv.x += distortionFactor;
            new_vUv.y += distortionFactor;
      
            vec4 base = texture2DProj(tDiffuse, new_vUv);
            vec4 blur = texture2DProj(tDiffuseBlur, new_vUv);
            
            vec4 merge = base;
            
            #ifdef USE_NORMALMAP
              vec2 normal_uv = vec2(0.0);
              vec4 normalColor = texture2D(normalMap, vUv);
              vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );
              vec3 coord = new_vUv.xyz / new_vUv.w;
              normal_uv = coord.xy + coord.z * my_normal.xz * 0.05 * normalScale;
              vec4 base_normal = texture2D(tDiffuse, normal_uv);
              vec4 blur_normal = texture2D(tDiffuseBlur, normal_uv);
              merge = base_normal;
              blur = blur_normal;
            #endif
      
            float depthFactor = 0.0001;
            float blurFactor = 0.0;
      
            #ifdef USE_DEPTH
              vec4 depth = texture2DProj(tDepth, new_vUv);
              depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
              depthFactor *= depthScale;
              depthFactor = max(0.0001, min(1.0, depthFactor));
      
              #ifdef USE_BLUR
                blur = blur * min(1.0, depthFactor + depthToBlurRatioBias);
                merge = merge * min(1.0, depthFactor + 0.5);
              #else
                merge = merge * depthFactor;
              #endif
        
            #endif
      
            float reflectorRoughnessFactor = roughness;
            #ifdef USE_ROUGHNESSMAP
              vec4 reflectorTexelRoughness = texture2D( roughnessMap, vUv );
              
              reflectorRoughnessFactor *= reflectorTexelRoughness.g;
            #endif
            
            #ifdef USE_BLUR
              blurFactor = min(1.0, mixBlur * reflectorRoughnessFactor);
              merge = mix(merge, blur, blurFactor);
            #endif
      
            vec4 newMerge = vec4(0.0, 0.0, 0.0, 1.0);
            newMerge.r = (merge.r - 0.5) * mixContrast + 0.5;
            newMerge.g = (merge.g - 0.5) * mixContrast + 0.5;
            newMerge.b = (merge.b - 0.5) * mixContrast + 0.5;
            
            diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + newMerge.rgb * mixStrength);
            `);
  }
}

export { MeshReflectorMaterial as default };
//# sourceMappingURL=MeshReflectorMaterial.mjs.map
