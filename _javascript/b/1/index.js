import Bug from '../../main/bug';
import { bootstrapElement } from '../../main/bootstrap';

function B1(hostElement) {
  const renderType = PIXI.utils.isWebGLSupported() ? 'WebGL' : 'canvas';
  PIXI.utils.sayHello(renderType);
  const app  = new PIXI.Application({
    width: 320,
    height: 320,
    antialias: true,
    resolution: 1,
  });
  app.renderer.backgroundColor = 0xf5f5dc;
  app.renderer.autoResize = true;
  hostElement.appendChild(app.view);
}

const hostElement = bootstrapElement();
const instance = hostElement ? new B1(hostElement) : null;
export default instance;
