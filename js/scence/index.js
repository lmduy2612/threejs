import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
  AxesHelper,
  DirectionalLight,
  DirectionalLightHelper,
  CameraHelper,
} from 'three'
import * as dat from 'dat.gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { addMeshes } from './meshes'

class ThreejsSence {
  constructor(canvas) {
    this.scene = this.createScene()
    this.camera = this.createCamera(canvas)
    this.renderer = this.createRenderer(canvas)

    this.plane = this.createPlane()
    this.scene.add(this.plane)

    const axesHelper = new AxesHelper(15)
    this.scene.add(axesHelper)

    requestAnimationFrame(this.render.bind(this))
    this.handleResize()

    this.controls = this.createControls(this.scene)
    this.createControlsGui()

    this.createOrbitControls()
    this.createOrbitControlsGui()

    this.createDirectionalLight()

    this.loadModel()

    addMeshes(this.scene)
  }

  /**
   * =================== Sence =========================
   */
  createScene() {
    const scene = new Scene()
    return scene
  }

  /**
   * =================== Camara =========================
   */
  createCamera(canvas) {
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const aspect = width / height
    const camera = new PerspectiveCamera(45, aspect, 0.1, 1000)
    camera.position.set(40, 40, 30)
    camera.lookAt(this.scene.position)

    camera.tick = (ms) => {
      // Tính góc xoay theo thời gian
      // Xoay một vòng hết 16 giây
      const seconds = ms / 1000
      const angle = (seconds * Math.PI) / 8

      // Sử dụng các hàm sin và cos để di chuyển vòng tròn
      camera.position.x = 30 * Math.sin(angle)
      camera.position.z = 30 * Math.cos(angle)

      // Luôn nhìn vào điểm trung tâm
      camera.lookAt(this.scene.position)
    }

    return camera
  }

  /**
   * =================== Renderer =========================
   */
  createRenderer(canvas) {
    const renderer = new WebGLRenderer({
      canvas,
      antialias: true,
    })
    renderer.setClearColor(new Color(0xffffff))
    const pixelRatio = window.devicePixelRatio
    const width = canvas.clientWidth * pixelRatio
    const height = canvas.clientHeight * pixelRatio
    renderer.setSize(width, height, false)
    return renderer
  }

  /**
   * =================== Plane =========================
   */
  createPlane() {
    const planeGeometry = new PlaneGeometry(50, 30, 1, 1)
    const planeMaterial = new MeshBasicMaterial({
      color: new Color('#99ff99'),
    })
    planeMaterial.opacity = 0.5
    planeMaterial.transparent = true

    const planeMesh = new Mesh(planeGeometry, planeMaterial)
    planeMesh.rotation.x = -0.5 * Math.PI
    planeMesh.position.y = 0
    planeMesh.position.z = 0
    return planeMesh
  }

  /**
   * =================== Controls =========================
   */
  createControls(scene) {
    const controls = {
      numberOfObjects: scene.children.length,
      rotateCamera: false,
    }
    return controls
  }

  createControlsGui() {
    const gui = new dat.GUI({
      width: 300,
    })
    gui.add(this.controls, 'numberOfObjects').listen().name('Number object')
    gui.add(this.controls, 'rotateCamera').name('Rotate camara')

    // Camera
    const size = 100
    const cameraPositionGui = gui.addFolder('Camera position')
    cameraPositionGui.add(this.camera.position, 'x', -size, size)
    cameraPositionGui.add(this.camera.position, 'y', -size, size)
    cameraPositionGui.add(this.camera.position, 'z', -size, size)
    cameraPositionGui.open()

    const cameraProjectionGui = gui.addFolder('Camera projection')
    cameraProjectionGui.add(this.camera, 'fov', 0, 100).onChange(() => {
      this.camera.updateProjectionMatrix()
    })
    cameraProjectionGui.open()
  }

  /**
   * =================== Render =========================
   */
  update(ms) {
    if (this.controls.rotateCamera) {
      this.camera.tick(ms)
    }
  }

  render(ms) {
    this.update(ms)
    this.orbitControls.update()
    this.directionalLightHelper.update()
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(this.render.bind(this))
  }

  /**
   * =================== Resize =========================
   */
  handleResize() {
    window.addEventListener('resize', () => {
      this.onResize()
    })
  }

  onResize() {
    const canvas = this.renderer.domElement
    const pixelRatio = window.devicePixelRatio
    const width = canvas.clientWidth * pixelRatio
    const height = canvas.clientHeight * pixelRatio
    const aspect = width / height
    this.camera.aspect = aspect
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height, false)
  }

  /**
   * =================== Orbit controls =========================
   */
  createOrbitControls() {
    this.orbitControls = new OrbitControls(
      this.camera,
      this.renderer.domElement
    )
    this.orbitControls.enableDamping = true
    this.orbitControls.autoRotate = false

    this.orbitControls.addEventListener('change', () => {
      if (!this.controls.useAnimationLoop) {
        this.renderer.render(this.scene, this.camera)
      }
    })
  }

  createOrbitControlsGui() {
    this.controls = {
      useAnimationLoop: true,
    }

    const gui = new dat.GUI()
    gui.add(this.controls, 'useAnimationLoop')
    gui.add(this.orbitControls, 'enableDamping')
    gui.add(this.orbitControls, 'autoRotate')
  }

  /**
   * =============== Light ================
   */
  createDirectionalLight() {
    this.directionalLight = new DirectionalLight(0xeeeeee, 2)
    this.directionalLight.visible = true
    this.directionalLight.castShadow = true
    this.directionalLight.position.set(30, 10, 0)

    this.directionalLightHelper = new DirectionalLightHelper(
      this.directionalLight,
      5
    )
    this.directionalLightHelper.visible = true

    this.directionalCameraHelper = new CameraHelper(
      this.directionalLight.shadow.camera
    )
    this.directionalCameraHelper.visible = false

    this.scene.add(
      this.directionalLight,
      this.directionalLightHelper,
      this.directionalCameraHelper
    )
  }

  async loadModel() {
    const url = `./models/Flamingo.glb`
    const gltfLoader = new GLTFLoader()
    const gltf = await gltfLoader.loadAsync(url)
    console.log(gltf)
    requestAnimationFrame(this.render.bind(this))
  }
}

/**
 * =================== Load document =========================
 */
window.addEventListener('load', () => {
  new ThreejsSence(document.querySelector('#webglOutput'))
})
