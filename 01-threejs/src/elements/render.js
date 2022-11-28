import { Color, WebGLRenderer } from 'three';

const createRender = () => {
  const renderer = new WebGLRenderer({
    antialias: true,
  });
  renderer.setClearColor(new Color(0x000000));
  renderer.setSize(window.innerWidth, window.innerHeight);

  return renderer;
};

export { createRender };
