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

import { addHouse } from './house'
import { addGate } from './gate'
import { addFence } from './fence'

const twoPi = Math.PI * 2

// Add lists meshes
export const addMeshes = (scene) => {
  addHouse(scene)
  addGate(scene)
  addFence(scene)

  // addMeshCylinder(scene)
  // addMeshSphere(scene)
  addText(scene)
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
  const geometry = new TextGeometry('JobhopIn', {
    font: font,
    size: 1.4,
    height: 0.2,
    curveSegments: 4,
    bevelEnabled: true,
    bevelThickness: 0.15,
    bevelSize: 0.2,
    bevelSegments: 1,
  })
  const material = new MeshPhongMaterial({
    side: BackSide,
    color: '#fff',
  })
  const mesh = new Mesh(geometry, material)
  geometry.center()
  geometry.rotateY(33)
  mesh.position.x = 14
  mesh.position.y = 29
  mesh.position.z = 0
  scene.add(mesh)
}

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
