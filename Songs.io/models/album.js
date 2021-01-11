const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    image:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: false
    },
    snippet:{
        type: String,
        required: false
    }
}, {timestamps: true});

const Album = mongoose.model('Album', albumSchema);
module.exports = Album;