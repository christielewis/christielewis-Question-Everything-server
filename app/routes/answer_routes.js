const express = require('express')
const passport = require('passport')

const Question = require('../models/question')
const Answer = require('../models/answer')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
// GET /answers
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
// PATCH /answers/5a7db6c74d55bc51bdf39793
router.patch('/answers/:id', requireToken, removeBlanks, (req, res, next) => {
  const answerId = req.params.answerId
  const answerData = req.body.answer
  const questionId = answerData.questionId

  Question.findById(questionId)
    .then(handle404)
    .then(question => {
      const answer = question.answer.id(answerId)
      answer.set(answerData)
      return question.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE /answers/5a7db6c74d55bc51bdf39793
router.delete('/answers/:id', requireToken, (req, res, next) => {
  const answerId = req.params.answerId
  const answerData = req.body.answer
  const questionId = answerData.questionId

  Question.findById(questionId)
    .then(handle404)
    .then(question => {
      question.answer.id(answerId).remove()
      return question.save()
    })
    .then(() => removeBlanks.sendStatus(204))
    .catch(next)
})

module.exports = router
