import Bug from '../../main/bug';
import { bootstrapElement } from '../../main/bootstrap';

class B1 {
  constructor(hostElement) {
    this.hostElement = hostElement;
    this.init();
  }

  init() {
    this.createApp();
    this.addTick();
    this.drawShapes();
  }

  createApp() {
    const renderType = PIXI.utils.isWebGLSupported() ? 'WebGL' : 'canvas';
    PIXI.utils.sayHello(renderType);
    this.app = new PIXI.Application({
      width: 320,
      height: 320,
      antialias: true,
      resolution: 2,
    });
    this.app.renderer.backgroundColor = 0xf5f5dc;
    this.app.renderer.autoResize = true;
    this.hostElement.appendChild(this.app.view);
  }

  addTick() {
    this.ticking = false;
    const tickFn = delta => { this.onTick(delta); }
    this.hostElement.addEventListener('mousedown', () => {
      if (this.ticking) {
        this.app.ticker.add(tickFn);
      } else {
        this.app.ticker.remove(tickFn);
      }
      this.ticking = !this.ticking;
    });
  }

  drawShapes() {
    const circle = new PIXI.Graphics();
    circle.lineStyle(1, 0x000000, 1);
    circle.drawCircle(0, 0, 3);
    circle.x = 100;
    circle.y = 100;
    this.app.stage.addChild(circle);
  }

  onTick(delta) {
    console.log(delta);
  }
}

const hostElement = bootstrapElement();
const instance = hostElement ? new B1(hostElement) : null;
export default instance;
