import Bug from '../../main/bug';
import { bootstrapElement } from '../../main/bootstrap';

class B1 {
  constructor(hostElement) {
    this.hostElement = hostElement;
    this.init();
  }

  init() {
    this.tick = null;
    this.bug = new Bug({ x: 100, y: 100 });
    this.createApp();
    this.createBug();
    this.startTick();
  }

  createApp() {
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

  startTick() {
    if (!this.tick) {
      this.tick = delta => { this.onTick(delta); };
      this.app.ticker.add(this.tick);
    }
  }

  stopTick() {
    if (this.tick) {
      this.app.ticker.remove(this.tick);
      this.tick = null;
    }
  }

  onTick(delta) {
    this.bug.tick();
    this.body.x = this.bug.x;
    this.body.y = this.bug.y;
  }

  createBug() {
    this.body = new PIXI.Graphics();
    this.body.beginFill(0x000000);
    this.body.drawCircle(0, 0, 10);
    this.body.endFill();
    this.body.x = this.bug.x;
    this.body.y = this.bug.y;
    this.app.stage.addChild(this.body);
  }
}

const hostElement = bootstrapElement();
const instance = hostElement ? new B1(hostElement) : null;
export default instance;
