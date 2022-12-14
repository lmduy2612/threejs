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

export const addHouse = (scene) => {
  // Nhà chính
  addMeshHouse(scene)
  addMeshHouse1(scene)
  addMeshHouse2(scene)
  addMeshHouse3(scene)
  addMeshHouse4(scene)
  addMeshHouseLobby1(scene)
  addMeshHouseLobby2(scene)

  // Nhà trái
  addMeshHouseB(scene)
  addMeshHouseBLobby1(scene)
  addMeshHouseBLobby2(scene)
  addMeshHouseBLobby3(scene)
  addMeshHouseBLobby4(scene)
  addMeshHouseBLobby5(scene)
  addMeshHouseBLobby6(scene)

  // Nhà phải
  addMeshHouseC(scene)
  addMeshHouseCLobby1(scene)
  addMeshHouseCLobby2(scene)
  addMeshHouseCLobby3(scene)
  addMeshHouseCLobby4(scene)
  addMeshHouseCLobby5(scene)
  addMeshHouseB6(scene)

  // Cầu thang
  addMeshHouseStair1(scene)
  addMeshHouseStair2(scene)
  addMeshHouseStair3(scene)
  addMeshHouseStair4(scene)
  addMeshHouseStair5(scene)
  addMeshHouseStair6(scene)
}

const addMeshHouse = (scene) => {
  const geometry = new BoxGeometry(30, 32, 13)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = -4
  mesh.position.y = 16
  mesh.position.z = 0
  scene.add(mesh)
}

const addMeshHouseB = (scene) => {
  const geometry = new BoxGeometry(24, 32, 7)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = -6
  mesh.position.y = 16
  mesh.position.z = -9.5
  scene.add(mesh)
}

const addMeshHouseC = (scene) => {
  const geometry = new BoxGeometry(30, 32, 9)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = -4
  mesh.position.y = 16
  mesh.position.z = 11
  scene.add(mesh)
}

const addMeshHouse1 = (scene) => {
  const geometry = new BoxGeometry(10, 0.5, 12)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 12
  mesh.position.y = 10
  mesh.position.z = 0
  scene.add(mesh)
}

const addMeshHouse2 = (scene) => {
  const geometry = new BoxGeometry(4, 0.5, 12)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 12
  mesh.position.y = 18
  mesh.position.z = 0
  scene.add(mesh)
}

const addMeshHouse3 = (scene) => {
  const geometry = new BoxGeometry(4, 0.5, 12)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 12
  mesh.position.y = 26
  mesh.position.z = 0
  scene.add(mesh)
}

const addMeshHouse4 = (scene) => {
  const geometry = new BoxGeometry(1, 2, 12)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 13.5
  mesh.position.y = 26.75
  mesh.position.z = 0
  scene.add(mesh)
}

const addMeshHouseStair1 = (scene) => {
  const geometry = new BoxGeometry(1, 10, 1)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 16
  mesh.position.y = 5
  mesh.position.z = 5
  scene.add(mesh)
}

const addMeshHouseStair2 = (scene) => {
  const geometry = new BoxGeometry(1, 10, 1)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 16
  mesh.position.y = 5
  mesh.position.z = -5
  scene.add(mesh)
}

const addMeshHouseStair3 = (scene) => {
  const geometry = new BoxGeometry(13, 0.5, 12)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 12
  mesh.position.y = 0.25
  mesh.position.z = 0
  scene.add(mesh)
}

const addMeshHouseStair4 = (scene) => {
  const geometry = new BoxGeometry(12.5, 0.5, 11.5)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 12
  mesh.position.y = 0.5
  mesh.position.z = 0
  scene.add(mesh)
}

const addMeshHouseStair5 = (scene) => {
  const geometry = new BoxGeometry(12, 0.5, 11)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 12
  mesh.position.y = 0.75
  mesh.position.z = 0
  scene.add(mesh)
}

const addMeshHouseStair6 = (scene) => {
  const geometry = new BoxGeometry(11.5, 0.5, 10.5)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 12
  mesh.position.y = 1
  mesh.position.z = 0
  scene.add(mesh)
}

const addMeshHouseLobby1 = (scene) => {
  const geometry = new BoxGeometry(4, 18, 1)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 12
  mesh.position.y = 18.75
  mesh.position.z = 6
  scene.add(mesh)
}

const addMeshHouseLobby2 = (scene) => {
  const geometry = new BoxGeometry(4, 18, 1)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 12
  mesh.position.y = 18.75
  mesh.position.z = -6
  scene.add(mesh)
}

const addMeshHouseCLobby1 = (scene) => {
  const geometry = new BoxGeometry(4, 0.5, 6)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 12
  mesh.position.y = 10
  mesh.position.z = 11
  scene.add(mesh)
}

const addMeshHouseCLobby2 = (scene) => {
  const geometry = new BoxGeometry(4, 0.5, 6)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 12
  mesh.position.y = 18
  mesh.position.z = 11
  scene.add(mesh)
}

const addMeshHouseCLobby3 = (scene) => {
  const geometry = new BoxGeometry(4, 0.5, 6)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 12
  mesh.position.y = 26
  mesh.position.z = 11
  scene.add(mesh)
}

const addMeshHouseCLobby4 = (scene) => {
  const geometry = new BoxGeometry(1, 2, 6)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 13.5
  mesh.position.y = 26.75
  mesh.position.z = 11
  scene.add(mesh)
}

const addMeshHouseCLobby5 = (scene) => {
  const geometry = new BoxGeometry(4, 18, 1)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 12
  mesh.position.y = 18.75
  mesh.position.z = 8
  scene.add(mesh)
}

const addMeshHouseB6 = (scene) => {
  const geometry = new BoxGeometry(4, 18, 1)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 12
  mesh.position.y = 18.75
  mesh.position.z = 14
  scene.add(mesh)
}

const addMeshHouseBLobby1 = (scene) => {
  const geometry = new BoxGeometry(3, 0.5, 6)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 7.5
  mesh.position.y = 8
  mesh.position.z = -10
  scene.add(mesh)
}

const addMeshHouseBLobby2 = (scene) => {
  const geometry = new BoxGeometry(3, 0.5, 6)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 7.5
  mesh.position.y = 16
  mesh.position.z = -10
  scene.add(mesh)
}

const addMeshHouseBLobby3 = (scene) => {
  const geometry = new BoxGeometry(3, 0.5, 6)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 7.5
  mesh.position.y = 22
  mesh.position.z = -10
  scene.add(mesh)
}

const addMeshHouseBLobby4 = (scene) => {
  const geometry = new BoxGeometry(1, 2, 6)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 8.5
  mesh.position.y = 23
  mesh.position.z = -10
  scene.add(mesh)
}

const addMeshHouseBLobby5 = (scene) => {
  const geometry = new BoxGeometry(4, 16, 1)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 7
  mesh.position.y = 16
  mesh.position.z = -7
  scene.add(mesh)
}

const addMeshHouseBLobby6 = (scene) => {
  const geometry = new BoxGeometry(4, 16, 1)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 7
  mesh.position.y = 16
  mesh.position.z = -13
  scene.add(mesh)
}
