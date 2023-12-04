const http = require('http')

const server = http.createServer((request, response) => {

  response.writeHead(200, { 'Content-Type': 'text/html' });

  response.end('Hello world!');
})

server.listen(8080)

console.log('Server is running at http://127.0.0.1:8080/');



// const https = require('https')
// const utils = require('util')

// const { promisify } = utils

// https.get(
//   'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0',
//   (res, err) => {

//     const arr = []
//     res.on('data', chunk => {
//       // console.log(Object.prototype.toString.call(chunk))
//       arr.push(chunk)
//     })

//     res.on('end', () => {
//       let content = Buffer.concat(arr).toString()
//       // console.log(JSON.parse(content))
//       console.log(content)
//     })
//   }
// )