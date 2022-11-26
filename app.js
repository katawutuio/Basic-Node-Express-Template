const express = require('express')
const path  = require('path')

const usersRouter = require('./routes/users.router')
const messagesRouter = require('./routes/messages.router')

const app = express()

// load template engine
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

const port = 3000

app.use((req, res, next) => {
  const start = Date.now()
  next()
  const delta = Date.now() - start
  console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())


// map router to url endpoint
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Welcome!',
    caption: 'The world is beautiful!!'
  })
})
app.use('/users', usersRouter)
app.use('/messages', messagesRouter)


app.listen(port)