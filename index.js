const express = require('express')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const path = require('path')

const todolistRoutes = require('./src/routes/todolist')

dotenv.config()
const PORT = process.env.PORT
const HOST = process.env.HOST

const app = express()

app.engine('.hbs', exphbs.engine({
  extname: '.hbs',
  defaultLayout: null
}))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './src/views'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")))

app.use('/', todolistRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`)
})