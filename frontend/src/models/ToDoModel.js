const mongoose = require('mongoose');
// import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('todo', todoSchema);