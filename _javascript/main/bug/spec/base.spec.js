const Base = require('../base').default;

describe('Base', () => {
  let base;

  beforeEach(() => {
    base = new Base({ foo: 'bar' });
  });
  it('has a method called initialize', () => {
    expect(typeof base.initialize).toBe('function');
  });

  describe('option()', () => {
    it('returns a defined value if set on options', () => {
      expect(base.option('foo', 'ugh')).toEqual('bar');
    });
    it('returns a default value if no value is set on options', () => {
      expect(base.option('buz', 'ugh')).toEqual('ugh');
    });
  });
});

