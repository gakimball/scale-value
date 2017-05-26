# scale-value

> Proportionally scale a value

[![Travis](https://img.shields.io/travis/gakimball/scale-value.svg?maxAge=2592000)](https://travis-ci.org/gakimball/scale-value) [![npm](https://img.shields.io/npm/v/scale-value.svg?maxAge=2592000)](https://www.npmjs.com/package/scale-value)

## Installation

```bash
npm install scale-value
```

## Usage

```js
const scaleValue = require('scale-value');

// Given a value between 0 and 100, this function will return a proportional value between 0 and 50
const scale = scaleValue(0, 100, 0, 50);

scale(0); // => 0
scale(50); // => 25
scale(75); // => 37.5
scale(100); // => 50

// You can also clamp the input value, so the output value isn't above or below the min/max
scale(200); // => 100
scale(200, true); // => 50
```

## API

### scaleValue(inputMin, inputMax, outputMin, outputMax)

Create a function to translate a value within an input range to an equivalent output range.

- **inputMin** (Integer) - Minimum input value.
- **inputMax** (Integer) - Maximum input value.
- **outputMin** (Integer) - Minimum output value.
- **outputMax** (Integer) - Maximum output value.

Returns a `scale` function.

#### scale(n, clamp)

Scale an input value to an equivalent output value.

- **n** (Integer) - Input value.
- **clamp** (Boolean) - Clamp input value within the min/max input. Defaults to `false`.

## Local Development

```bash
git clone https://github.com/gakimball/scale-value
cd scale-value
npm install
npm test
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
