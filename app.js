const express = require('express');
const userModel = require('./usermodel');
const app = express();



app.get('/', (req , res) => {
res.send("hello");
} )

app.get('/create', async (req , res) => {
   let createduser = await userModel.create({
        name:"faizan ahmed",
        username:"faizan21061",
        email:"faizanmemon2106@gmail.com",
    })

    res.send(createduser);
    } )


    app.get('/update', async (req , res) => {
        let updateduser = await userModel.findOneAndUpdate({username: "faizan21061"},{name:"ahmed"},{new: true});
     
         res.send(updateduser);
         } )


    app.get('/read', async (req, res)=> {
        let readusers = await userModel.find();

        res.send(readusers);
    })
   

    app.get('/delete', async (req , res) => {
        let deleteduser = await userModel.findOneAndDelete({username: "faizan21061"});
     
         res.send(deleteduser);
         } )

app.listen(8000, ()=> {
    console.log('aaaa');
});