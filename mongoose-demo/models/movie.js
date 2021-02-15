const mongoose = require('mongoose')

const moviesSchema = mongoose.Schema({
  name: String,
  popularity: Number
},
  {
    versionKey: false
  })

module.exports = mongoose.model('Movies', moviesSchema)