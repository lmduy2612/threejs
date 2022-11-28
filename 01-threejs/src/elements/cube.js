import { BoxGeometry, Mesh, MeshNormalMaterial } from 'three';

const createCube = () => {
  const cubeGeometry = new BoxGeometry(5, 5, 15);
  const cubeMaterial = new MeshNormalMaterial();
  const cube = new Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(0, 0, 0);

  return cube;
};

export { createCube };
