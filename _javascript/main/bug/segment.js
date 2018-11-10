import Base from './base';
import { segment } from './defaults';
import Legs from './legs';

/**
 *
 */
class Segment extends Base {
  constructor(options) {
    super(options);
  }

  initialize() {
    this.name = this.option('name', segment.name);
    this.x = this.option('x', segment.offset.x);
    this.y = this.option('y', segment.offset.y);
  }
}

export default Segment;