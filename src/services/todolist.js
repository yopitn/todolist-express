const axios = require('axios');
const dotenv = require('dotenv')

dotenv.config()
const PORT = process.env.PORT
const HOST = process.env.HOST

exports.getTodo = (req, res) => {
  axios.get(`http://${HOST}:${PORT}/api/todo`)
      .then(json => {
        res.render('index', {
          pageTitle: 'TodoApp - Express Js',
          todo: json.data
        })
      })
      .catch(err => {
        res.send(err)
      })
}