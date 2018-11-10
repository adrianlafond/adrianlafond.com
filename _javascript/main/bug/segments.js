import Base from './base';
import Segment from './segment';

/**
 * Segments controls a group of Segment instances.
 */
class Segments extends Base {
  constructor(options) {
    super(options);
  }

  initialize() {
    this.segments = [new Segment()];
  }

  get data() {
    return this.segments.map(segment => {
      const { name, x, y } = segment;
      return { name, x, y };
    });
  }
}

export default Segments;