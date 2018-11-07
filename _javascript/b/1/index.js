import Bug from '../../main/bug';
import { bootstrapElement } from '../../main/bootstrap';

class B1 {
  constructor(hostElement) {
    this.hostElement = hostElement;
    this.init();
  }

  init() {
    this.bug = new Bug();
    this.createApp();
    this.drawShapes();
    this.addTick();
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

  drawShapes() {
    const circle = new PIXI.Graphics();
    circle.beginFill(0x000000);
    circle.drawCircle(0, 0, 3);
    circle.endFill();
    circle.x = 160;
    circle.y = 160;
    this.app.stage.addChild(circle);
    this.circle = circle;
  }

  addTick() {
    this.ticking = false;
    const tickFn = delta => { this.onTick(delta); }
    this.hostElement.addEventListener('mousedown', () => {
      if (!this.ticking) {
        this.app.ticker.add(tickFn);
      } else {
        this.app.ticker.remove(tickFn);
      }
      this.ticking = !this.ticking;
    });
  }

  onTick(delta) {
    const ranInt = (px) => {
      const r = Math.random() * 2;
      const n = r < 1 ? -delta : delta;
      return Math.max(0, Math.min(320, px + n));
    }
    this.circle.x = ranInt(this.circle.x);
    this.circle.y = ranInt(this.circle.y);
  }
}

const hostElement = bootstrapElement();
const instance = hostElement ? new B1(hostElement) : null;
export default instance;
