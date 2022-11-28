import { BoxGeometry, Mesh, MeshNormalMaterial, SphereGeometry } from 'three';

const createCube = () => {
  const cubeGeometry = new BoxGeometry(8, 8, 8);
  const cubeMaterial = new MeshNormalMaterial(100);
  const cube = new Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(0, 0, 0);

  cube.tick = () => {
    cube.rotation.x += 0.002;
    cube.rotation.y += 0.002;
    cube.rotation.z += 0.002;
  };

  return cube;
};

const createCube2 = () => {
  const cubeGeometry = new SphereGeometry(5, 5, 5);
  const cubeMaterial = new MeshNormalMaterial();
  const cube = new Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(0, 0, 10);

  return cube;
};

export { createCube, createCube2 };
