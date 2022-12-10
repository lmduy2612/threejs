import {
  Mesh,
  MeshNormalMaterial,
  MeshBasicMaterial,
  MeshPhongMaterial,
  BoxGeometry,
  SphereGeometry,
  CylinderGeometry,
  BackSide,
} from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

const twoPi = Math.PI * 2

/**
 * Promisify font loading.
 */
function loadFont(url) {
  const loader = new FontLoader()
  return new Promise((resolve, reject) => {
    loader.load(url, resolve, undefined, reject)
  })
}

export const addMeshes = (scene) => {
  addMeshCube(scene)
  addMeshCylinder(scene)
  addMeshSphere(scene)
  addText(scene)
}

// Hình vuông
const addMeshCube = (scene) => {
  const geometry = new BoxGeometry(3, 1, 3)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = -20
  mesh.position.y = 2
  mesh.position.z = 10
  scene.add(mesh)
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
  const material = new MeshBasicMaterial({ color: '#1a1aff' })
  const mesh = new Mesh(geometry, material)
  mesh.position.x = -20
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
  const material = new MeshBasicMaterial({ color: '#1a1aff' })
  const mesh = new Mesh(geometry, material)
  mesh.position.x = -24
  mesh.position.y = 2
  mesh.position.z = 0
  scene.add(mesh)
}

const addText = async (scene) => {
  const font = await loadFont(
    'https://static.lockex1987.com/learn-threejs/fonts/helvetiker/helvetiker_regular.typeface.json'
  )
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
    color: '#1a1aff' 
  })
  const mesh = new Mesh(geometry, material)
  geometry.computeBoundingBox()
  geometry.boundingBox.getCenter(mesh.position).multiplyScalar(-1)
  mesh.position.x = -20
  mesh.position.y = 2
  mesh.position.z = -2
  scene.add(mesh)
}
