/**
 *
 * @param {*} content 文件内容
 * @param {*} map SourceMap
 * @param {*} meta 别的loader传递的参数
 * @returns content
 */

function asyncLoader1(content, map, meta) {
  const options = this.getOptins({
    type: 'object',
    properties: {
      type: 'string'
    }
  }); // 获取配置 需要传入参数的schema
  console.log(content);
  return content;
}

function asyncLoader2(content, map, meta) {
  this.callback(/* 错误原因 */ null, content, map, meta);
}

// 异步loader
function syncLoader(content, map, meta) {
  const callback = this.async();
  callback(/* 错误原因 */ null, content, map, meta);
}

module.exports = asyncLoader1;

// 文件内容变Buffer 或者给function上添加这个属性
module.exports.raw = true;

// pitch loader
/**
 *
 * @param {*} remainingRequest 表示剩余需要处理的loader的绝对路径以!分割组成的字符串。
 * @param {*} previousRequest 表示pitch阶段已经迭代过的loader按照!分割组成的字符串。
 * @param {*} data
 */
module.exports.pitch = function (remainingRequest, previousRequest, data) {};
