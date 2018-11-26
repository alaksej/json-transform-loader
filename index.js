const getOptions = require('loader-utils').getOptions;
// const validateOptions = require('schema-utils');

const schema = {
  type: 'object',
  properties: {
    transformFn: {
      type: 'function'
    }
  }
};

module.exports = function jsonTransformLoader(source) {
  
  const options = getOptions(this);
  const obj = JSON.parse(source);

  // validateOptions(schema, options, 'Example Loader');

  // Apply some transformations to the source...

  const objAfter = options.transformFn(obj);

  return `${JSON.stringify(objAfter)}`;
}
