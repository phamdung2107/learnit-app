const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        description: {
            type: String,
        },
        url: {
            type: String,
            require: true,
            default: 'Anonymous',
        },
        status: {
            type: String,
            enum: ['TO-LEARN','LEARNING', 'LEARNED']
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users',
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('posts', schema);