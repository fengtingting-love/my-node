test('测试生成代码' , () => {
  //第一步，引入文件，进行实例化
  const src = new (require('../index'))
  //第二步，调用源文件中的方法，按照要求传入参数
  const ret=src.getTestSource('fun','class')
  //第三步，打印结果
  expect(ret)
    .toBe(`
test('Test fun', () => {
const fun = require('../class')
const ret = fun()
// expect(ret)
//  toBe('test return')
})
    `)
})

// test('测试文件名生成',() => {
//   //因为是引入一个class类，所以要进行实例化，然后令方法立即执行
//   const src=new(require('../index'))()
//   const ret=src.getTestFileName('/abc/class.js');
//   //我们期待一个方法，令我们的测试用例在测试某个文件时，若文件名是/abc/class.js则生成文件名为/abc/__test__/class.spec.js
//   expect(ret)
//     .toBe('/abc/__test__/class.spec.js')
// })