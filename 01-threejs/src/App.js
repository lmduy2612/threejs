import { useEffect, useRef } from 'react';

import {
  createCamara,
  createCube,
  createSence,
  createRender,
  createCube2,
} from './elements';

import { createControlsGui } from './controls';
import { AxesHelper } from 'three';

let renderer;

const init = () => {
  // init sence
  const scene = createSence();

  const axesHelper = new AxesHelper(60);
  scene.add(axesHelper);

  const cube = createCube();
  scene.add(cube);

  const cube2 = createCube2();
  scene.add(cube2);

  const camera = createCamara();
  camera.lookAt(scene.position);

  renderer = createRender();

  const onUpdate = () => {
    cube.tick();
  };

  const render = () => {
    // onUpdate();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };

  // add control GUI
  createControlsGui({
    render,
    cube,
    cube2,
  });

  // resize
  const onResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspect = width / height;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };

  const resize = () => {
    window.addEventListener('resize', () => {
      onResize();
      render();
    });
  };

  // handle list function excute
  render();
  resize();
};

init();

function App() {
  const refContainer = useRef(null);

  useEffect(() => {
    if (refContainer.current) {
      refContainer.current.appendChild(renderer.domElement);
    }
  }, [refContainer]);

  return (
    <div className='App'>
      <div ref={refContainer}></div>
    </div>
  );
}

export default App;
