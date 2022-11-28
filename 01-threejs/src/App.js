import { useEffect, useRef } from 'react';

import {
  createCamara,
  createCube,
  createSence,
  createRender,
} from './elements';

function App() {
  const refContainer = useRef(null);
  const scene = createSence();

  const cube = createCube();
  scene.add(cube);

  const camera = createCamara();
  camera.lookAt(scene.position);

  const renderer = createRender();
  renderer.render(scene, camera);

  useEffect(() => {
    refContainer.current.appendChild(renderer.domElement);
  }, []);

  return (
    <div className='App'>
      <div ref={refContainer}></div>
    </div>
  );
}

export default App;
