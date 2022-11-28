import { useEffect, useRef } from 'react';
import { AxesHelper } from 'three';
import {
  createCamara,
  createSence,
  createRender,
  createMesh,
  createMesh2,
} from './elements';
import { createControlsGui } from './controls-gui';

let renderer;

const init = () => {
  /**
   * Init element threeJs
   */
  // construct sence
  const scene = createSence();

  // mesh lists
  const mesh1 = createMesh();
  scene.add(mesh1);
  const mesh2 = createMesh2();
  scene.add(mesh2);

  // create camara
  const camera = createCamara();
  camera.lookAt(scene.position);

  // render
  renderer = createRender();

  /**
   * Help X, Y, Z
   */
  const axesHelper = new AxesHelper(60);
  scene.add(axesHelper);

  /**
   * Render
   */
  // const onAnimate = () => {
  //   mesh1.tick();
  // };

  const render = () => {
    renderer.render(scene, camera);
    // onAnimate();
    // requestAnimationFrame(render);
  };
  render();

  /**
   * Add control GUI
   */
  createControlsGui({
    render,
    mesh1,
    mesh2,
  });
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
