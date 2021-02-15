const router = require('express').Router()
const movie = require('./movie')

router.use(movie)

module.exports = router