const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // }
}, {
  timestamps: true,
  toObject: {
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
})

module.exports = answerSchema
