import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const loadModels = (scene) => {
  loadTable(scene)
  loadTable2(scene)

  loadPug1(scene)
  loadPug2(scene)
  loadPug3(scene)

  loadTree(scene)

  loadCar(scene)

  loadMan(scene)
}

const loadTable = async (scene) => {
  const gltfLoader = new GLTFLoader()
  const gltf = await gltfLoader.loadAsync('./models/Table.glb')
  const mesh = gltf.scene.children[0]
  mesh.position.set(9, 1.5, -8)
  mesh.scale.set(3, 5, -10)
  scene.add(mesh)
}

const loadTable2 = async (scene) => {
  const gltfLoader = new GLTFLoader()
  const gltf = await gltfLoader.loadAsync('./models/Table.glb')
  const mesh = gltf.scene.children[0]
  mesh.position.set(15, 0, 15)
  mesh.scale.set(3, 5, -18)
  scene.add(mesh)
  callback()
}

const loadPug1 = async (scene) => {
  const gltfLoader = new GLTFLoader()
  const gltf = await gltfLoader.loadAsync('./models/Pug.glb')
  const mesh = gltf.scene.children[0]
  mesh.position.set(32, 0, -16)
  mesh.scale.set(-0.5, 0.5, 0.5)
  scene.add(mesh)
  callback()
}

const loadPug2 = async (scene) => {
  const gltfLoader = new GLTFLoader()
  const gltf = await gltfLoader.loadAsync('./models/Pug.glb')
  const mesh = gltf.scene.children[0]
  mesh.position.set(35, 0, -16)
  mesh.scale.set(-0.5, 0.5, 0.5)
  scene.add(mesh)
  callback()
}

const loadPug3 = async (scene) => {
  const gltfLoader = new GLTFLoader()
  const gltf = await gltfLoader.loadAsync('./models/Pug.glb')
  const mesh = gltf.scene.children[0]
  mesh.position.set(34, 0, -14.5)
  mesh.scale.set(-0.75, 0.75, 0.75)
  scene.add(mesh)
  callback()
}

const loadTree = async (scene) => {
  const gltfLoader = new GLTFLoader()
  await [27, 20, 13, 6, -1, -8, -15, -22, -29].map(async (x) => {
    const gltf = await gltfLoader.loadAsync('./models/Tree.glb')
    const mesh = gltf.scene.children[0]
    mesh.position.set(x, 3, -23)
    mesh.scale.set(3, 3, 3)
    scene.add(mesh)
    callback()
  })
}

const loadCar = async (scene) => {
  const gltfLoader = new GLTFLoader()
  await [7, 16].map(async (x) => {
    const gltf = await gltfLoader.loadAsync('./models/SportsCar.glb')
    const mesh = gltf.scene.children[0]
    mesh.position.set(34, 0, x)
    mesh.scale.set(2, 2, 2)
    scene.add(mesh)
    callback()
  })
}

const loadMan = async (scene) => {
  const gltfLoader = new GLTFLoader()
  await [
    { x: 15, z: -8 },
    { x: 14, z: -10 },
    { x: 18, z: -8 },
    { x: 16, z: -11 },
    { x: 22, z: -8 },
    { x: 33, z: -2 },
  ].map(async (item) => {
    const gltf = await gltfLoader.loadAsync('./models/Man.glb')
    const mesh = gltf.scene.children[0]
    mesh.position.set(item.x, 0, item.z)
    mesh.scale.set(1, 1, 1)
    scene.add(mesh)
    callback()
  })
}
