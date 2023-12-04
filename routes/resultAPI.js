import express from "express";

const router = express.Router()

// 用于测试的数据
let userList = [
  {
    id: 1,
    name: '张三'
  },
  {
    id: 2,
    name: '李四'
  },
  {
    id: 3,
    name: '王五'
  }
]

// 查询所有用户信息
router.get('/users', (req, res) => {
  res.json(userList)
})

// 根据id查询用户信息
router.get('/users/:id', (req, res) => {
  const { params: { id } } = req
  const userDetail = userList.find(el => el.id === Number(id)) || null
  res.json(userDetail)
})


// 根据id删除用户信息 - 软删除
router.delete('/delUsersBtID/:id', (req, res) => {
  const { params: { id } } = req
  userList = userList.filter(el => el.id !== Number(id))
  res.json(userList)
})

// 根据id 修改对应的用户信息
router.put('/users/:id', (req, res) => {
  const { params: { id } } = req
  const userDetail = userList.find(el => el.id === Number(id)) || null

  console.log(req.body);

  // 说明找得到
  if (userDetail && userDetail.id) {
    const { body: { name } } = req
    userDetail.name = name

    res.json(userDetail)
  } else {
    // 说明找不到
    res.json('没找到对应数据喔')
  }
})

// 新增
router.post('/addUsers', (req, res) => {
  const { body: { name } } = req
  if (name) {
    const user = {
      id: userList.length + 1, // 这里的id 不严谨，凑合用吧
      name: name
    }

    userList.push(user)

    res.json(userList)
  } else {
    res.json('参数有问题')
  }
})

export default router