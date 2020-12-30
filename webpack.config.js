const { merge } = require('webpack-merge');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

const modelLoaderConfiguration = {
  test: /(\.cti|\.ctb|\.utb|\.dis|\.uti|\.tbl|\.dic)$/,
  use: {
    loader: 'file-loader?name=tables/[name].[ext]',
  },
};

module.exports = async function (env, argv) {

  return merge(await createExpoWebpackConfigAsync(env, argv), {
    module: {
      rules: [modelLoaderConfiguration],
    },
  });
};
