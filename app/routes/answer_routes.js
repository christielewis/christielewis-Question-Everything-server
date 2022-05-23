const express = require('express')
const passport = require('passport')

const Answer = require('../models/answer')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// CREATE
// POST /questions/answers
router.post('/questions/answers', requireToken, (req, res, next) => {
  req.body.answer.owner = req.user.id

  Answer.create(req.body.answer)
    .then(answer => {
      res.status(201).json({ answer: answer.toObject() })
    })
    .catch(next)
})

// UPDATE
// PATCH /questions/answers/5a7db6c74d55bc51bdf39793
router.patch('/questions/answers/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.answer.owner

  Answer.findById(req.params.id)
    .then(handle404)
    .then(answer => {
      requireOwnership(req, answer)

      return answer.updateOne(req.body.answer)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE /questions/answers/5a7db6c74d55bc51bdf39793
router.delete('/questions/answers/:id', requireToken, (req, res, next) => {
  Answer.findById(req.params.id)
    .then(handle404)
    .then(answer => {
      requireOwnership(req, answer)
      answer.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
