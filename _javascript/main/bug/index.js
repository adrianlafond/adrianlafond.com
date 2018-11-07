import defaults from './defaults.json';
import Segment from './segment';
import Leg from './leg';

class Bug {
  constructor(options) {
    this.options = options || {};
    this.initialize();
  }

  tick() {
    //
  }

  initialize() {
    this.initializePosition();
    this.initializeSegments();
  }

  initializePosition() {
    this.x = this.option('x', defaults.x);
    this.y = this.option('y', defaults.y);
  }

  initializeSegments() {
    this.segments = [];
  }

  initializeLegs() {
    this.legs = [];
  }

  option(key, defaultValue) {
    return this.options.hasOwnProperty(key) ? this.options[key] : defaultValue;
  }
}

export default Bug;