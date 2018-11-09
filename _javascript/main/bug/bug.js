import Base from './base';
import defaults from './defaults.json';
import Segments from './segments';

const bugs = new WeakMap();

function initialize(instance, options = {}) {
  bugs.set(instance, {
    options,
    x: Base.option(options, 'x', defaults.x),
    y: Base.option(options, 'y', defaults.y),
    angle: Base.option(options, 'angle', defaults.angle),
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