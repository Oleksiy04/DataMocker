# DataMocker

A simple data mocking library for generating mock data based on predefined schemas.

## Installation

```sh
npm install data-mocker

const DataMocker = require('data-mocker');

const schema = {
  name: { type: 'string', length: 8 },
  age: { type: 'number', min: 18, max: 60 },
  isActive: { type: 'boolean' },
  tags: { type: 'array', itemSchema: { type: 'string', length: 5 }, length: 3 },
};

const mocker = new DataMocker(schema);
const mockData = mocker.generate();

console.log(mockData);

const schema = {
  name: { type: 'string', length: 8 },
  age: { type: 'number', min: 18, max: 60 },
  isActive: { type: 'boolean' },
  tags: { type: 'array', itemSchema: { type: 'string', length: 5 }, length: 3 },
};
const mockData = mocker.generate();
console.log(mockData);
 
Save this as `README.md` in your project directory before publishing the package to NPM. This will help users understand how to install and use your `DataMocker` package.
