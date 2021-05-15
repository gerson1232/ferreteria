const mongoose = require('mongoose');
const {
    mongodb
} = require('./kays');

mongoose.connect(mongodb.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('base de datos conectada'))
    .catch(err => console.error(err));