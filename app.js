import express from 'express'
import multipart from 'connect-multiparty'
// import demoRouter from './routes/router-demo.js'
// import responseRouter from './routes/response.js'
// import setHeaderRouter from './routes/headers.js';
import resultApi from './routes/resultAPI.js'

const PORT = 3000 // 用于设置端口号
const app = express() // 创建一个express应用程序实例

app.use(express.json()) // 当传递的有请求体的时候，需要加body解析
app.use(multipart());//解析form-data提交数据

// // 创建一个 GET /hello 路由
// app.get('/hello', (req, res) => {
//   // 返回一个包含 "Hello World" 的 H1 标题的响应
//   res.send('<h1>Hello World</h1>')
// })


// 注册 demoRouter 路由
// app.use(demoRouter)

// 下载文件等操作
// app.use(responseRouter)

// 请求头
// app.use(setHeaderRouter)

// resultAPi 增删改查
app.use('/api', resultApi)


// 启动 Express 应用程序，监听在指定的端口上
app.listen(PORT, err => {
  if (err) {
    console.log(err);
  }
  // 在控制台输出服务器运行信息
  console.log(`Server is running at http://localhost:${PORT}`)
})