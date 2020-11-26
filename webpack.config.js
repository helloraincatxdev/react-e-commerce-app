module.exports = {
  test: /\.(png|jpe?g|gif|svg|jpg|jpeg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[contenthash].[ext]',
        outputPath: 'static/img',
        esModule: false // <- here
      }
    }
  ]
}