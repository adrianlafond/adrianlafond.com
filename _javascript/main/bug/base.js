/**
 *
 */
class Base {
  constructor(options) {
    this.options = options || {};
    this.initialize();
  }

  initialize() {
    //
  }

  option(key, defaultValue) {
    return this.options.hasOwnProperty(key) ? this.options[key] : defaultValue;
  }
}

export default Base;
