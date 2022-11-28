import { useEffect, useRef } from 'react';

import {
  createCamara,
  createCube,
  createSence,
  createRender,
} from './elements';

import { createControlsGui } from './controls';

let renderer;

const init = () => {
  const scene = createSence();

  const cube = createCube();
  scene.add(cube);

  const camera = createCamara();
  camera.lookAt(scene.position);

  renderer = createRender();
  const render = () => renderer.render(scene, camera);

  createControlsGui({
    render,
    cube,
  });

  render();
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
