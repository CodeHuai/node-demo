// routes/response.js
import express from 'express'
import path from 'path'

const router = express.Router()


router.get('/response/json', (req, res) => {
  // 主要用于发送 JSON 数据。
  // res.json({
  //   name: 'express',
  //   type: 'framework'
  // })

  // 可以用于发送任意类型的数据。
  // res.send('<h1>hello express</h1>')

  // 下载文件
  res.download(path.resolve('./package.json'))
})

export default router