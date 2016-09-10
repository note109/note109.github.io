/* eslint-disable no-console */
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("./webpack.config");
const app = new (require("express"))();
const port = process.env.PORT || 3000;

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use((req, res) => {
  res.sendFile(__dirname + "/app/index.html");
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info("🐕  Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.", port, port);
  }
});
