function calculateNumber(type, a, b) {
  x = Math.round(a);
  y = Math.round(b);

  if (type === 'SUBTRACT') {
    return x - y;
  }

  if (type === 'DIVIDE') {
    if (y === 0) {
      return 'Error';
    }
    return x / y;
  }
  return x + y;
}

module.exports = calculateNumber;
