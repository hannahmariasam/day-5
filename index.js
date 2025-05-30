//npm init
//npm i express 
// importing express 
var express = require("express")
//Initialization
var app = express(); 
// db connection
require("./db")
// get the model file
var students=require("./model/student")
// middleware
app.use(express.json());
// install cors
var cors=require('cors')
app.use(cors())
// port assigning
var port= 3000;
// api to get data
app.get('/',(req,res)=> {
    res.send("hello");

});
// api to add data to the database(hhtp method to add to database is post)
app.post('/',async(req,res)=>{
    try {
        await students(req.body).save();
        res.send("Data added")
    } catch (error) {
        res.send(error)
    }

})
// api to get data from db
app.get("/View",async(req,res)=>{
    try {
        var data = await students.find();
        res.send(data);
        
    } catch (error) {
        res.send(error);
        
    }
})
// api to delete a document from db
app.delete('/:id',async(req,res)=>{
    console.log(req.params.id)
    try {
        await students.findByIdAndDelete(req.params.id);
        res.send("Student deleted")
        
    } catch (error) {
        res.send(error)        
    }
})
// api to update a document
app.put('/:id',async(req,res)=>{
    console.log(req.params.id)
    try {
        // While updating since we are giving new data we need body so we request body
        await students.findByIdAndUpdate(req.params.id,req.body);
        res.send("Student data update")
        
    } catch (error) {
        
        res.send(error)
    }
})
// server in listening state
app.listen(port,()=>{
    console.log(`Server is up and running in ${port}`);
})