const getOptions = require('loader-utils').getOptions;
const validateOptions = require('schema-utils');
const schema = require('./schema.json');

module.exports = function jsonTransformLoader(source) {
  const options = getOptions(this);
  validateOptions(schema, options, 'JSON Transform Loader');

  const obj = JSON.parse(source);

  const transformed = options.transformFn(obj);

  return `${JSON.stringify(transformed)}`;
}
