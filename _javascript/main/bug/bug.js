import Base from './base';
import defaults from './defaults.json';
import Segments from './segments';

class Bug extends Base {
  constructor(options) {
    super(options);
  }

  get data() {
    return {};
  }

  initialize() {
    this.initializePosition();
    this.initializeSegments();
  }

  initializePosition() {
    this.ticks = 0;
    this.x = this.option('x', defaults.x);
    this.y = this.option('y', defaults.y);
    this.angle = this.option('angle', defaults.angle);
  }

  initializeSegments() {
    this.segments = new Segments(this.options);
  }

  tick() {
    this.ticks++;
  }
}

export default Bug;