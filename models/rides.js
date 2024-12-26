const mongoose = require('mongoose')

const rideSchema = mongoose.Schema({
    pickUp : {
        type : String,
        required : true
    },
    drop_off : {
        type : String,
        required : true
    },
})

module.exports = mongoose.model('ride', rideSchema);