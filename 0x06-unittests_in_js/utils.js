const utils = {
  calculateNumber(type, a, b) {
    const x = Math.round(a);
    const y = Math.round(b);
    if (type === 'SUBTRACT') {
      returnx - y;
    }

    if (type === 'DIVIDE') {
      if (y === 0) {
        return 'Error';
      }
      return x / y;
    }
    return x + y;
  },
};

module.exports = Utils;
