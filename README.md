# json-transform-loader
A webpack loader that transforms a JSON object with a user-defined function

## How to use
* Add to dev dependencies:
```bash
npm i -D json-transform-loader
```
* Configure:
```js
// webpack.config.js
 module: {
    rules: [
      {
        test: /\.json$/,
        use: [
          {
            loader: 'json-transform-loader',
            options: {
              transformFn: jsonObject => {
                // Do something with the json object, e.g.:
                const transformed = { ...jsonObject, answer: 42 };
                return transformed;
              }
            }
          }
        ]
      }
    ]
  }
```
