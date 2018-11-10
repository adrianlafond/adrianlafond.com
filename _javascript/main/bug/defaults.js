export const root = {
  x: 0,
  y: 0,
  angle: 0,
};

const limbs = [
  {
    length: 8,
    angle: 100,
  },
  {
    length: 8,
    angle: 90
  },
  {
    length: 8,
    angle: 80,
  },
];

export const legs = {
  left: {
    offset: {
      x: -2,
      y: 2,
    },
    limbs,
  },
  right: {
    offset: {
      x: 2,
      y: 2,
    },
    limbs,
  },
};

export const segment = {
  name: 'body',
  offset: {
    x: 0,
    y: 0,
  },
  legs: {
    left: [legs.left],
    right: [legs.right],
  },
};
