const express = require('express')
const passport = require('passport')

const Question = require('../models/question')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')

const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
// GET ALL QUESTIONS /
router.get('/all', requireToken, (req, res, next) => {
  Question.find()
    .then(questions => {
      return questions.map(questions => questions.toObject())
    })
    .then(questions => res.status(200).json({ questions: questions }))
    .catch(next)
})

// INDEX
// GET ALL OF YOUR /questions
router.get('/questions', requireToken, (req, res, next) => {
  Question.find({ owner: req.user.id })
    .then(questions => {
      return questions.map(questions => questions.toObject())
    })
    .then(questions => res.status(200).json({ questions: questions }))
    .catch(next)
})

// SHOW
// GET /questions/5a7db6c74d55bc51bdf39793
router.get('/questions/:id', requireToken, (req, res, next) => {
  Question.findById(req.params.id)
    .then(handle404)
    .then(question => res.status(200).json({ question: question.toObject() }))
    .catch(next)
})

// CREATE
// POST /questions
router.post('/questions', requireToken, (req, res, next) => {
  req.body.question.owner = req.user.id

  Question.create(req.body.question)
    .then(question => {
      res.status(201).json({ question: question.toObject() })
    })
    .catch(next)
})

// UPDATE
// PATCH /questions/5a7db6c74d55bc51bdf39793
router.patch('/questions/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.question.owner

  Question.findById(req.params.id)
    .then(handle404)
    .then(question => {
      requireOwnership(req, question)

      return question.updateOne(req.body.question)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE /Questions/5a7db6c74d55bc51bdf39793
router.delete('/questions/:id', requireToken, (req, res, next) => {
  Question.findById(req.params.id)
    .then(handle404)
    .then(question => {
      requireOwnership(req, question)
      question.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
