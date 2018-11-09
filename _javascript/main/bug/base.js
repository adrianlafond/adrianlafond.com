/**
 *
 */
class Base {
  constructor(options) {
    this.options = options || {};
    this.initialize();
  }

  static option(options, key, defaultValue) {
    return options.hasOwnProperty(key) ? options[key] : defaultValue;
  }

  initialize() {
    //
  }

  option(key, defaultValue) {
    return this.options.hasOwnProperty(key) ? this.options[key] : defaultValue;
  }
}

export default Base;
