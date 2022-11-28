import { PerspectiveCamera } from 'three';

const createCamara = () => {
  const aspect = window.innerWidth / window.innerHeight;
  const camera = new PerspectiveCamera(50, aspect, 0.1, 1000);
  camera.position.set(30, 30, 30);
  return camera;
};

export { createCamara };
