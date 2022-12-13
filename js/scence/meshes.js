import {
  Mesh,
  MeshNormalMaterial,
  MeshStandardMaterial,
  MeshBasicMaterial,
  MeshPhongMaterial,
  BoxGeometry,
  SphereGeometry,
  CylinderGeometry,
  BackSide,
} from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import * as dat from 'dat.gui'

const twoPi = Math.PI * 2

// Add lists meshes
export const addMeshes = (scene) => {
  addMeshCube(scene)
  addMeshCylinder(scene)
  addMeshSphere(scene)
  addText(scene)
}

// Hình vuông
const addMeshCube = (scene) => {
  const geometry = new BoxGeometry(3, 1, 3)
  // const material = new MeshNormalMaterial()
  const material = new MeshPhongMaterial({
    color: 0x049ef4,
    emissive: 0xb71cd9,
    specular: 0x444444,
  })
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 0
  mesh.position.y = 2
  mesh.position.z = 10
  scene.add(mesh)

  const gui = new dat.GUI({
    width: 300,
  })
  guiMeshPhongMaterial(gui, material)
}

// Hình cầu
const addMeshSphere = (scene) => {
  const data = {
    radius: 1.5,
    widthSegments: 32,
    heightSegments: 16,
    phiStart: 0,
    phiLength: twoPi,
    thetaStart: 0,
    thetaLength: Math.PI,
  }

  const geometry = new SphereGeometry(
    data.radius,
    data.widthSegments,
    data.heightSegments,
    data.phiStart,
    data.phiLength,
    data.thetaStart,
    data.thetaLength
  )
  // const material = new MeshBasicMaterial({ color: '#1a1aff' })
  const material = new MeshStandardMaterial({
    color: 0x7777ff,
    roughness: 0,
    metalness: 0,
  })
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 0
  mesh.position.y = 2
  mesh.position.z = 6
  scene.add(mesh)
}

// Hình trụ
const addMeshCylinder = (scene) => {
  const data = {
    radiusTop: 2,
    radiusBottom: 2,
    height: 6,
    radialSegments: 100,
    heightSegments: 1,
    openEnded: false,
    thetaStart: 0,
    thetaLength: twoPi,
  }
  const geometry = new CylinderGeometry(
    data.radiusTop,
    data.radiusBottom,
    data.height,
    data.radialSegments,
    data.heightSegments,
    data.openEnded,
    data.thetaStart,
    data.thetaLength
  )
  // const material = new MeshBasicMaterial({ color: '#1a1aff' })
  const material = new MeshStandardMaterial({
    color: 0x7777ff,
    roughness: 0,
    metalness: 0,
  })
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 0
  mesh.position.y = 3
  mesh.position.z = 0
  scene.add(mesh)
}

// Text
function loadFont(url) {
  const loader = new FontLoader()
  return new Promise((resolve, reject) => {
    loader.load(url, resolve, undefined, reject)
  })
}

const addText = async (scene) => {
  const font = await loadFont('./fonts/helvetiker_regular.typeface.json')
  const geometry = new TextGeometry('duylm', {
    font: font,
    size: 1.0,
    height: 0.2,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.15,
    bevelSize: 0.3,
    bevelSegments: 5,
  })
  const material = new MeshPhongMaterial({
    side: BackSide,
    color: '#1a1aff',
  })
  const mesh = new Mesh(geometry, material)
  geometry.computeBoundingBox()
  geometry.boundingBox.getCenter(mesh.position).multiplyScalar(-1)
  mesh.position.x = 0
  mesh.position.y = 2
  mesh.position.z = -4
  scene.add(mesh)
}

/*
 * Xử lý khi người dùng chọn lại màu sắc trên GUI.
 * @param {THREE.Color} color Đối tượng màu sắc
 * @returns {Function} Hàm để truyền vào onChange của GUI
 */
function handleColorChange(color) {
  return function (value) {
    if (typeof value === 'string') {
      value = value.replace('#', '0x')
    }
    color.setHex(value)
  }
}

function guiMeshPhongMaterial(gui, material) {
  const data = {
    color: material.color.getHex(),
    emissive: material.emissive.getHex(),
    specular: material.specular.getHex(),
  }
  const folder = gui.addFolder('MeshPhongMaterial')
  folder.addColor(data, 'color').onChange(handleColorChange(material.color))
  folder
    .addColor(data, 'emissive')
    .onChange(handleColorChange(material.emissive))
  folder
    .addColor(data, 'specular')
    .onChange(handleColorChange(material.specular))
  folder.add(material, 'shininess', 0, 100)
  folder.open()
}
