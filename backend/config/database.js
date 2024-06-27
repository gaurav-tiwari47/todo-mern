const mongoose = require('mongoose');

exports.dbConnect = async() => {
    await mongoose.connect('mongodb://localhost:27017/')
    .then(() => {
        console.log('DB Connetion successfull')
    })
    .catch(() => {
        console.log('Error while connecting to db')
    })
}