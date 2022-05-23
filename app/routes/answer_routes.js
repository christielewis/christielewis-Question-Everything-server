const express = require('express')
const passport = require('passport')

const Question = require('../models/question')
const Answer = require('../models/answer')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')
// const question = require('../models/question')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

router.post('/answers', requireToken, (req, res, next) => {
  const answerData = req.body.answer
  const questionId = answerData.questionId

  Question.findById(questionId)
    .then(handle404)
    .then(question => {
      requireOwnership(req, question)
      question.answer.push(answerData)
      return question.save()
    })
    .then(question => {
      res.status(201).json({ question: question })
    })
    .catch(next)
})

// UPDATE
// PATCH /questions/answers/5a7db6c74d55bc51bdf39793
router.patch('/answers/:id', requireToken, removeBlanks, (req, res, next) => {
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
router.delete('answers/:id', requireToken, (req, res, next) => {
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
