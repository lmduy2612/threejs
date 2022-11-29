import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
  AxesHelper,
} from 'three'
import * as dat from 'dat.gui'
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

    addMeshes(this.scene)
  }

  createScene() {
    const scene = new Scene()
    return scene
  }

  createCamera(canvas) {
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const aspect = width / height
    const camera = new PerspectiveCamera(45, aspect, 0.1, 1000)
    camera.position.set(40, 40, 40)
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

    // Control
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

  update(ms) {
    if (this.controls.rotateCamera) {
      this.camera.tick(ms)
    }
  }

  render(ms) {
    this.update(ms)
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(this.render.bind(this))
  }

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
}

window.addEventListener('load', () => {
  new ThreejsSence(document.querySelector('#webglOutput'))
})
