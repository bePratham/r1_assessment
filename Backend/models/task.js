// models/conversation.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  from: {
    name: String,
    email: String,
    id: Number,
  },
  message: String,
});

const senderSchema = new mongoose.Schema({
  name: String,
  id:Number,
  email: String,
});

const conversationSchema = new mongoose.Schema({
  id: String,
  messages: [messageSchema],
  senders: [senderSchema],
});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;
