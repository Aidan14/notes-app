const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    }
}, { versionKey: false })

module.exports = mongoose.model('notes', noteSchema)