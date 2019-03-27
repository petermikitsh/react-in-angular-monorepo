module.exports = function (api) {
  api.cache(true);
  const prodMode = process.env.NODE_ENV === 'production';

  return {
    "plugins": [
      "@babel/plugin-syntax-dynamic-import",
      "react-hot-loader/babel",
      prodMode && [
        "babel-plugin-css-modules-transform",
        {
          "extractCss": "./dist/styles.css",
        }
      ],
      "@babel/plugin-transform-runtime",
      ["transform-define", {
        "PRODUCTION": prodMode
      }]
    ].filter(Boolean),
    "presets": [
      [
        "@babel/preset-env", {
          "modules": "commonjs",
          "targets": {
            "browsers": [
              "last 2 versions",
              "IE >= 10"
            ]
          },
          "useBuiltIns": "usage",
          "corejs": 2,
          "debug": false
        }
      ],
      "@babel/preset-react",
      "@babel/preset-typescript"
    ]
  };
}
