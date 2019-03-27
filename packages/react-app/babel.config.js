module.exports = function (api) {
  api.cache(true);
  const prodMode = process.env.NODE_ENV === 'production';
  const runFromBabelCLI = Boolean(process.env.BABEL);

  return {
    "plugins": [
      "@babel/plugin-syntax-dynamic-import",
      "react-hot-loader/babel",
      runFromBabelCLI && [
        "babel-plugin-css-modules-transform",
        {
          "extractCss": "./dist/styles.css",
        }
      ],
      "@babel/plugin-transform-runtime",
      ["transform-define", {
        "PRODUCTION": prodMode
      }],
      !prodMode && [
        "babel-plugin-module-resolver",
        {
          "root": ["."],
          "alias": {
              "react-dom": "@hot-loader/react-dom",
          }
        }
      ]
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
