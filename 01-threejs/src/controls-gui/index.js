import * as dat from 'dat.gui';

const controlsRotation = {
  rotationX: 0,
  rotationY: 0,
  rotationZ: 0,
};
const controlsRotation2 = {
  rotationZ2: 0,
};

const convertDegToRad = (deg) => {
  return (deg * Math.PI) / 180;
};

const createControlsGui = ({ mesh1, mesh2, render }) => {
  const gui = new dat.GUI();
  gui.add(controlsRotation, 'rotationX', 0, 360).onChange((value) => {
    mesh1.rotation.x = convertDegToRad(value);
    render();
  });
  gui.add(controlsRotation, 'rotationY', 0, 360).onChange((value) => {
    mesh1.rotation.y = convertDegToRad(value);
    render();
  });
  gui.add(controlsRotation, 'rotationZ', 0, 360).onChange((value) => {
    mesh1.rotation.z = convertDegToRad(value);
    render();
  });

  const gui2 = new dat.GUI();
  gui2.add(controlsRotation2, 'rotationZ2', 0, 360).onChange((value) => {
    mesh2.rotation.z = convertDegToRad(value);
    render();
  });
};

export { createControlsGui };
