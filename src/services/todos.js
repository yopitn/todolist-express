const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const HOST = process.env.HOST
const PORT = process.env.PORT

exports.home = async (req, res) => {
  const data = await axios.get(`http://${HOST}:${PORT}/api`)

  try {
    res.render('home', {
      title: "TodoApp - Express Js",
      status: true,
      home: true,
      todos: data.data
    })
  } catch(err) {
    console.log(err)
  }
}

exports.create = (req, res) => {
  res.render('create', {
    status: true
  })
}

exports.detail = async (req, res) => {
  const id = req.params.id
  const data = await axios.get(`http://${HOST}:${PORT}/api/${id}`)

  try {
    res.render('detail', {
      title: data.data[0].title,
      status: true,
      todos: {
        id: data.data[0].id,
        title: data.data[0].title
      }
    })
  } catch(err) {
    console.log(err)
  }
}

exports.status404 = (req, res) => {
  res.render('404');
}