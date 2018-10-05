const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');
const db = mongoose.connection;

const tokenList = mongoose.Schema({
    tokenName: {
        type: String
    },
    tokenAddress:{
        type:String
    },
    tokenDecimal:{
        type:String
   
    },
    tokenSymbol:{
        type:String
    },
    status:{
        type:String,
        enum:["Request","Reject","Accept"]
    },
    createdBy:{
        type:String
    },
    abi:"",
    createdAt: {
        type: Date,
        default: Date.now()
    },
    createdAt1: {
        type: String,
        default: Date.now()
    }
})
tokenList.plugin(mongoosePaginate)
module.exports = mongoose.model('tokenList', tokenList, 'tokenList');