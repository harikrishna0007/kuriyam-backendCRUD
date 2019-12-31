const mongoose =require ('mongoose');

const PostSchema=mongoose.Schema({
    name:{
        type:String,
        required:true, 
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
   
})

module.exports=mongoose.model('post',PostSchema);