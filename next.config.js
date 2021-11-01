const {plugin} = require('next/dist/build/webpack/config/helpers')
module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.png$/,
      use: [
        {
          loader: 'file-loader',
          options:{
            outputPath: 'static'
          }
        }
      ]
    })

    return config
  }
}
