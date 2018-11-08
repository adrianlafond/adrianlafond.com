const Bug = require('../bug').default;
const Segments = require('../segments').default;
const defaults = require('../defaults.json');

describe('Bug', () => {
  let bug;

  describe('defaults', () => {
    beforeEach(() => {
      bug = new Bug();
    });
    it('sets default x', () => {
      expect(bug.x).toBe(defaults.x);
    });
    it('sets default y', () => {
      expect(bug.y).toBe(defaults.y);
    });
    it('sets default angle', () => {
      expect(bug.angle).toBe(defaults.angle);
    });
    it('instantiates Segments', () => {
      expect(bug.segments instanceof Segments).toBe(true);
    });
  });

  describe('root options', () => {
    const options = {
      x: 10,
      y: 20,
      angle: 45,
    };
    beforeEach(() => {
      bug = new Bug(options);
    });
    it('sets x as specified', () => {
      expect(bug.x).toBe(options.x);
    });
    it('sets y as specified', () => {
      expect(bug.y).toBe(options.y);
    });
    it('sets angle as specified', () => {
      expect(bug.angle).toBe(options.angle);
    });
  });

  describe('initialization', () => {
    it('instantiates Segments', () => {
      expect(bug.segments instanceof Segments).toBe(true);
    });
    it('increments ticks on tick()', () => {
      const ticks = bug.ticks;
      bug.tick();
      expect(bug.ticks).toBe(ticks + 1);
    });
  });

  describe('data', () => {
    it('is an object', () => {
      expect(typeof bug.data).toEqual('object');
    });
    it('is read-only', () => {
      bug.data.foo = 'bar';
      expect(bug.data.foo).toBeUndefined();
    });
  });
});

