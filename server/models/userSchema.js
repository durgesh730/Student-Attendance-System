const mongoose = require('mongoose')
const {Schema} = mongoose 

const attendanceSchema = new Schema({
      id:{
        type: mongoose.Schema.Types.ObjectId
    },
    rollnumber:{
       type:Number,
       required:true
    },
    Subject:{
        type:String,
        required:true
    },
    checkin:{
        type:Date,
        default:Date.now
    },
    checkout:{
        type:Date,
        default:new Date(+new Date() +60*60*1000)
    }
    
})

const Students = mongoose.model('Students', attendanceSchema);
module.exports =Students;