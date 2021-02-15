const Movies = require('../models/movie')

class Controller {
  static getData(req, res, next) {
    Movies.find()
      .then(result => {
        res.status(201).json({ result })
      })
      .catch(err => {
        console.log(err, "ini err")
      })
  }

  static getOneData(req, res, next) {
    Movies.findById(req.params.id)
      .then(result => {
        res.status(201).json({ result })
      })
      .catch(err => {
        console.log(err, "ini err")
      })
  }

  static postData(req, res, next) {
    const { name, popularity } = req.body
    const newMovie = new Movies({
      name,
      popularity
    })
    newMovie.save()
      .then(result => {
        res.status(200).json({ result })
      })
      .catch(err => {
        next(err)
      })
  }

  static putData(req, res, next) {
    Movies.findByIdAndUpdate(req.params.id, {
      $set: req.body
    })
      .then(result => {
        res.status(201).json({ message: 'Data updated' })
      })
      .catch(err => {
        console.log(err, "ini err")
      })
  }

  static patchData(req, res, next) {
    Movies.findByIdAndUpdate(req.params.id, {
      $set: req.body
    })
      .then(result => {
        res.status(201).json({ message: 'Data updated' })
      })
      .catch(err => {
        console.log(err, "ini err")
      })
  }

  static deleteData(req, res, next) {
    Movies.findByIdAndDelete(req.params.id)
      .then(result => {
        res.status(201).json({ message: 'Data deleted' })
      })
      .catch(err => {
        console.log(err, "ini err")
      })
  }
}

module.exports = Controller