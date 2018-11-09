const Bug = require('../bug').default;
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
  });

  describe('initialization options', () => {
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

  describe('read-only value', () => {
    beforeEach(() => {
      bug = new Bug();
    });
    it('cannot set x', () => {
      expect(() => { bug.x = 999 }).toThrow();
    });
    it('cannot set y', () => {
      expect(() => { bug.y = 999 }).toThrow();
    });
    it('cannot set angle', () => {
      expect(() => { bug.angle = 999 }).toThrow();
    });
    it('cannot set ticks', () => {
      expect(() => { bug.ticks = 999 }).toThrow();
    });
  });

  describe('tick()', () => {
    it('increments ticks', () => {
      const ticks = bug.ticks;
      bug.tick();
      expect(bug.ticks).toBe(ticks + 1);
    });
  });
});