const path=require('path');
module.exports = class TestNow{
  /**
   * 测试代码生成
   * @param {methodName,classFile,isClass}
  */
  getTestSource(methodName, classFile, isClass = false){
    //第一步：打印方法名称
    console.log('getTestSource',methodName)
    //第二步：返回测试用例
    return `
test('${'Test '+ methodName }', () => {
const ${isClass?'{'+ methodName +'}' : methodName} = require('${'../'+classFile}')
const ret = ${methodName}()
// expect(ret)
//  toBe('test return')
})
    `
  }





  /**
   * 生成测试文件名
   * @param {*} filename 代码文件名
  */
  getTestFileName(filename){
    //获取文件夹名称
    const dirName=path.dirname(filename);
    //获取文件名称
    const baseName=path.basename(filename);
    //获取扩展名
    const extName=path.extname(filename);
    //令扩展名class.js-->class.spec.js
    const testName=baseName.replace(extName,`.spec${extName}`)
    return path.format({
      root:dirName+'/__test__/',
      base:testName
    })
  }
}