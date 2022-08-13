const express = require('express')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const path = require('path')

const todolistRoutes = require('./routes/todolist')

const app = express()

app.engine('.hbs', exphbs.engine({
  extname: '.hbs',
  defaultLayout: null
}))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', todolistRoutes)

app.listen(5050, () => {
  console.log("Server running in port 5050")
})