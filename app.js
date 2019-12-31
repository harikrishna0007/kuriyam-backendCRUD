const express =require('express');
const app =express();
const mongoose=require ('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
app.use(bodyParser.json());


const postsRoute=require('./routes/posts');

app.use(cors({
    origin : "http://localhost:4201"
}));
app.use('/posts',postsRoute);



mongoose.connect('mongodb://localhost:27017/kuriyam',{ useNewUrlParser: true,useFindAndModify:true,useCreateIndex:true },()=>{
    console.log("connected to db....")
})


app.listen(3000);