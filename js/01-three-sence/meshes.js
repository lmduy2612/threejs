import {
  Mesh,
  BoxGeometry,
  MeshNormalMaterial,
  SphereGeometry,
  MeshBasicMaterial,
} from 'three'

const twoPi = Math.PI * 2

export const addMeshes = (scene) => {
  addMeshCube(scene)
  addMeshSphere(scene)
}

const addMeshCube = (scene) => {
  const geometry = new BoxGeometry(3, 1, 3)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  mesh.position.x = 1.5
  mesh.position.y = 0.5
  mesh.position.z = 1.5
  scene.add(mesh)
}

const addMeshSphere = (scene) => {
  const data = {
    radius: 1,
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
  mesh.position.x = 1.5
  mesh.position.y = 3
  mesh.position.z = 1.5
  scene.add(mesh)
}
