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

const addMeshGate = (scene) => {
  const geometry = new BoxGeometry(1, 6, 1)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 30
  mesh.position.y = 3
  mesh.position.z = 3
  scene.add(mesh)
}

const addMeshGate2 = (scene) => {
  const geometry = new BoxGeometry(1, 6, 1)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 30
  mesh.position.y = 3
  mesh.position.z = -3
  scene.add(mesh)
}

const addMeshGate3 = (scene) => {
  const geometry = new BoxGeometry(1, 1, 7)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 30
  mesh.position.y = 6
  mesh.position.z = 0
  scene.add(mesh)
}

export const addGate = (scene) => {
  addMeshGate(scene)
  addMeshGate2(scene)
  addMeshGate3(scene)
}
