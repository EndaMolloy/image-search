var mongoose = require('mongoose')
var moment = require('moment')
var schema = mongoose.Schema

var searchSchema = new schema({

     imgSearch : {type:String, required: true},
     date: {type: String, default: moment().format('LLL')}
})

module.exports = mongoose.model('searchImg', searchSchema, 'searchImg')
