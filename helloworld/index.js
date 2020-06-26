//学习来源：开课吧有关node讲解视频
const helloText="Hello world";
module.exports = helloText;

/**
 * 一、node文件有四种运行调试方式
 * 第一种： node index.js / node helloworld
 * 第二种： nodemon index.js / nodemon helloworld
 * 第三种： Vscode中debugger （不太喜欢使用）
 * 第四种： jest helloworld
*/
/**
 * 二、在进行四种方式时遇到的问题
 * 问题1：安装nodemon时不生效
 *  解决方法：npm config set prefix /usr/local
 *          sudo npm install nodemon -g --registry=https://registry.npm.taobao.org
 * 问题2：安装jest时不生效
 *  解决方法：yarn global add jest
 *          npm init 配置package.json文件
*/