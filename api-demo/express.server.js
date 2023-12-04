import express from 'express'

const PORT = 3000
const app = express() // 创建 express 的实例

app.use(express.json())

// 中间件函数处理请求和响应
app.use((req, res, next) => {
  const { method, path, query, body, headers } = req
  console.log(`[${method}] ${path}`)
  console.log('query:', query)
  console.log('headers:', headers)
  console.log('body:', body)
  next()
})


// app.get('/sayHello', (req, res) => {
//   console.log(req, res);
//   // 返回一个标题的响应
//   res.send(`<div>你好哇</div>`)
// })

app.get('/method/get', (req, res) => {
  res.send('GET request')
})
app.post('/method/post', (req, res) => {
  res.send('POST request')
})
app.put('/method/put', (req, res) => {
  res.send('PUT request')
})
app.delete('/method/delete', (req, res) => {
  res.send('DELETE request')
})

// 启动 Express 应用程序，监听在指定的端口上
app.listen(PORT, () => {
  // 在控制台输出服务器运行信息
  console.log(`Server is running at http://localhost:${PORT}`)
})