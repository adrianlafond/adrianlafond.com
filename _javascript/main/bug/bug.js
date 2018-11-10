import Base from './base';
import { root } from './defaults';
import Segments from './segments';

const bugs = new WeakMap();

function initialize(instance, options = {}) {
  bugs.set(instance, {
    options,
    x: Base.option(options, 'x', root.x),
    y: Base.option(options, 'y', root.y),
    angle: Base.option(options, 'angle', root.angle),
    segments: new Segments(options),
    ticks: 0,
  });
}

class Bug {
  constructor(options) {
    initialize(this, options);
  }

  get x() {
    return bugs.get(this).x;
  }

  get y() {
    return bugs.get(this).y;
  }

  get angle() {
    return bugs.get(this).angle;
  }

  get segments() {
    return bugs.get(this).segments.data;
  }

  get ticks() {
    return bugs.get(this).ticks;
  }

  tick() {
    const data = bugs.get(this);
    data.ticks += 1;
    bugs.set(this, data);
  }
}

export default Bug;