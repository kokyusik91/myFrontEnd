// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   // 최종 서비스 하는데 파일을 만들것인가 현재 개발중인 상태의 파일을 만드는 것인가?
//   mode: 'development',
//   // 입력을 지정
//   entry: './app.js',
//   // 어느 디렉토리에 쓸거야?, 어떤 이름으로 쓸거야?
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },

//   devServer: {
//     compress: true,
//     port: 9999,
//   },
//   //
//   module: {
//     // webpack 규칙
//     rules: [
//       {
//         // 정규식에 매칭되는 파일들만 보내주세요 확장자가 .js인 파일들만 바벨 로더로 넣어줘.
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//           },
//         },
//       },
//     ],
//   },
//   plugins: [
//     // html 파일을 받아서 템플릿화
//     new HtmlWebpackPlugin({
//       title: '2.3 webPack Plugin',
//       template: 'index.html',
//     }),
//   ],
// };
// 웹팩 설정
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  devServer: {
    compress: true,
    port: 9999,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: '2.3 webPack Plugin',
      template: 'index.html',
    }),
  ],
};
