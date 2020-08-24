const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = Schema({
    name: {
        type: String
    },

    location: {
        type: String
    },

    ceo: {
        type: String
    }

});

module.exports = mongoose.model('companies', companySchema);