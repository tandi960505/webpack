// 导出模块
module.exports = {

  // 入口文件
  //entry: './main.js',  // 单个文件
  entry: ["./main.js"], // 多个文件

  // 输出配置
  output: {
    filename: 'main.bundle.js' // 输出文件名称，默认情况输出路径在更目录dist（会自动生成该文件夹）
  }
};