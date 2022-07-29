const ONE = Symbol('one');

const obj = {
  [Symbol(0)]: Symbol(0),
  [Symbol(1.1)]: Symbol(1.1),
  [Symbol(4294967295)]: Symbol(4294967295),
  [Symbol(4294967294)]: Symbol(4294967294),
  [Symbol('B')]: Symbol('B'),
  [Symbol('b')]: Symbol('b'),
  [Symbol('A')]: Symbol('A'),
  [Symbol('b2')]: Symbol('b2'),
  [Symbol('b1')]: Symbol('b1'),
  '-4294967294': -4294967294,
  '-4294967295': -4294967295,
  0: 0,
  1: 1,
  2: 2,
  1.1: 1.1,
  4294967295: 4294967295,
  4294967294: 4294967294,
  [Number.MAX_VALUE]: Number.MAX_VALUE,
  [Number.MAX_SAFE_INTEGER]: Number.MAX_SAFE_INTEGER,
  B: 'B',
  b: 'b',
  A: 'A',
  b2: 'b2',
  b1: 'b1',
  [ONE]: ONE,
  22: 11,
  11: 22,
  d: 'd',
  c: 'c'
};

Object.defineProperties(obj, {
  22: {
    enumerable: false
  },
  11: {
    enumerable: false
  },
  d: {
    enumerable: false
  },
  c: {
    enumerable: false
  },
  [ONE]: {
    enumerable: false
  }
});

console.log('obj = ', obj);
