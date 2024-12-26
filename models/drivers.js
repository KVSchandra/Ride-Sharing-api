const mongoose = require('mongoose')

const driverSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    vehicle : {
        type : String,
        required : true
    },
    licenceNumber : {
        type : Number, 
        required : true
    }
})

module.exports = mongoose.model('driver', driverSchema);