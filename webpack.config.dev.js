var path = require('path');
var webpack = require('webpack');

module.exports =
  { devtool: 'cheap-module-source-map'
  , entry:
    [ 'react-hot-loader/patch'
    , 'webpack-hot-middleware/client'
    , './src/index'
    ]
  , output:
    { path: path.join(__dirname, 'dist')
    , filename: 'bundle.js'
    , publicPath: '/static/'
    }
  , stats:
    { chunks: true
    }
  , resolve:
    { extensions:
      [ '.js'
      , '.jsx'
      ]
    }
  , module:
    { rules:
      [ { test: [ /\.js$/, /\.jsx$/ ]
        , loaders:
          [ 'babel-loader' ]
        , include: path.join(__dirname, 'src')
        }
      ]
    }
  , plugins:
    [ new webpack.HotModuleReplacementPlugin()
    , new webpack.DefinePlugin(
        { 'process.env':
          { 'NODE_ENV': JSON.stringify('development')
          }
        }
      )
    ]
  };
