'use strict';

const _clamp = require('lodash.clamp');

module.exports = (inputMin, inputMax, outputMin, outputMax) => (input, clamp) => {
  if (clamp) {
    input = _clamp(input, inputMin, inputMax);
  }

  const distance = outputMax - outputMin;
  const pct = (input - inputMin) / (inputMax - inputMin);

  return outputMin + (distance * pct);
};
