import * as dat from 'dat.gui';

const controls = {
  rotationX: 0,
  rotationY: 0,
  rotationZ: 0,
};

const convertDegToRad = (deg) => {
  return (deg * Math.PI) / 180;
};

const createControlsGui = ({cube, render}) => {
  const gui = new dat.GUI();
  gui.add(controls, 'rotationX', 0, 360).onChange((value) => {
    cube.rotation.x = convertDegToRad(value);
    render();
  });
  gui.add(controls, 'rotationY', 0, 360).onChange((value) => {
    cube.rotation.y = convertDegToRad(value);
    render();
  });
  gui.add(controls, 'rotationZ', 0, 360).onChange((value) => {
    cube.rotation.z = convertDegToRad(value);
    render();
  });

  return gui;
};

export { createControlsGui };
