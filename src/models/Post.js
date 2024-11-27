const mongoose = require('mongoose');
const { content } = require('../../client/src/tailwind.config');

const postSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true,
        default: () => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];   

            }
            return color;
        }
    },
});

module.exports = mongoose.model('Post', postSchema);