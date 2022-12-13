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

const addMeshHouse = (scene) => {
  const geometry = new BoxGeometry(25, 30, 12)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 0
  mesh.position.y = 18
  mesh.position.z = 0
  scene.add(mesh)
}

const addMeshHouse1 = (scene) => {
  const geometry = new BoxGeometry(6, 0.5, 12)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 13
  mesh.position.y = 10
  mesh.position.z = 0
  scene.add(mesh)
}

const addMeshHouse2 = (scene) => {
  const geometry = new BoxGeometry(6, 0.5, 12)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 13
  mesh.position.y = 18
  mesh.position.z = 0
  scene.add(mesh)
}

const addMeshHouse3 = (scene) => {
  const geometry = new BoxGeometry(6, 0.5, 12)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 13
  mesh.position.y = 26
  mesh.position.z = 0
  scene.add(mesh)
}

export const addHouse = (scene) => {
  addMeshHouse(scene)
  addMeshHouse1(scene)
  addMeshHouse2(scene)
  addMeshHouse3(scene)
}
