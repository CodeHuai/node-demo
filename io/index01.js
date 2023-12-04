const fs = require('fs')
const path = require('path')

const {appendFile, appendFileSync, readFile} = fs

const filePath = path.resolve(__dirname, './测试文本.txt')

// 往文件中添加内容
appendFileSync(filePath, '123')

// 读取文件
fs.promises.readFile(filePath, 'utf-8').then(callbackData => {
  console.log(callbackData)
})