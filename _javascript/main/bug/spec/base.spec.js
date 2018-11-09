const Base = require('../base').default;

describe('Base', () => {
  const options = { foo: 'bar' };
  let base;

  beforeEach(() => {
    base = new Base(options);
  });
  it('has a method called initialize', () => {
    expect(typeof base.initialize).toBe('function');
  });

  describe('prototype.option()', () => {
    it('returns a defined value if set on options', () => {
      expect(base.option('foo', 'ugh')).toEqual('bar');
    });
    it('returns a default value if no value is set on options', () => {
      expect(base.option('buz', 'ugh')).toEqual('ugh');
    });
  });

  describe('static.option()', () => {
    it('returns a defined value if set on options', () => {
      expect(Base.option(options, 'foo', 'ugh')).toEqual('bar');
    });
    it('returns a default value if no value is set on options', () => {
      expect(Base.option(options, 'buz', 'ugh')).toEqual('ugh');
    });
  });
});

