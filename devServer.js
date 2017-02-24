const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

const {
  HOST = 'localhost',
  PORT = 3000
} = process.env;

app.use(
  require('webpack-dev-middleware')(
    compiler
  , { noInfo: true
    , publicPath: config.output.publicPath
    , hot: true
    , historyApiFallback: true
    , stats:
      { colors: true }
    }
  )
);

app.use(require('webpack-hot-middleware')(compiler));

app.get(
  '*'
, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  }
);


app.listen(
  PORT
, HOST
, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Listening at http://${HOST}:${PORT}`);
  }
);
