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

const addMeshFence = (scene) => {
  const geometry = new BoxGeometry(1, 2, 16.5)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 30
  mesh.position.y = 1
  mesh.position.z = 11.5
  scene.add(mesh)
}

const addMeshFence2 = (scene) => {
  const geometry = new BoxGeometry(1, 2, 16.5)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 30
  mesh.position.y = 1
  mesh.position.z = -11.5
  scene.add(mesh)
}


const addMeshFence3 = (scene) => {
  const geometry = new BoxGeometry(61, 2, 1)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 0
  mesh.position.y = 1
  mesh.position.z = -20
  scene.add(mesh)
}

const addMeshFence4 = (scene) => {
  const geometry = new BoxGeometry(61, 2, 1)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 0
  mesh.position.y = 1
  mesh.position.z = 20
  scene.add(mesh)
}

const addMeshFence5 = (scene) => {
  const geometry = new BoxGeometry(1, 2, 41)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = -30
  mesh.position.y = 1
  mesh.position.z = 0
  scene.add(mesh)
}

export const addFence = (scene) => {
  addMeshFence(scene)
  addMeshFence2(scene)
  addMeshFence3(scene)
  addMeshFence4(scene)
  addMeshFence5(scene)
}
