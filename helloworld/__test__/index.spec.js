test('测试Helloword值', () => {
  const helloword = require('../index');
  //1. 直接输出结果
  // console.log('helloword功能的结果',helloword);

  //2.断言 assert
  expect(helloword)
    .toBe("Hello world")
})
/**
 * test的两个参数：
 *  第一个参数，字符串，用于标注或者与结果进行区分的提醒
 *  第二个参数，回调函数，用于对文件的操作和结果的调试
*/