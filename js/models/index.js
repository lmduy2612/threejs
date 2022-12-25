import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const loadModels = (scene, callback) => {
  loadTable(scene, callback)
}

const loadTable = async (scene, callback) => {
  const gltfLoader = new GLTFLoader()
  const gltf = await gltfLoader.loadAsync('./models/Table.glb')
  const mesh = gltf.scene.children[0]
  mesh.position.set(9, 1.5, -8)
  mesh.scale.set(3, 5, -10)
  scene.add(mesh)
  callback()
}
