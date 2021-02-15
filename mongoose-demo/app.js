const express = require('express')
const app = express()
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/thunder"
const routes = require('./routes/index')
const port = process.env.PORT || 5000

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
const connect = mongoose.connection

connect.on('open', () => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(routes)
  // app.use(errorHandlers)
  app.listen(port, () => {
    console.log(`series server listening at port ${port}`)
  })
})


