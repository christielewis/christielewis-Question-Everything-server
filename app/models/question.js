const mongoose = require('mongoose')
const answerSchema = require('./answer')

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  season: {
    type: Number,
    required: true
  },
  episode: {
    type: Number,
    required: true
  },
  answer: [answerSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toObject: {
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
})

module.exports = mongoose.model('Question', questionSchema)
