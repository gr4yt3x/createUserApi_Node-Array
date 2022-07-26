const express = require('express');
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//myAPP
var users = [] 

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/main.html');
})

app.get('/users',(req,res) => {
    res.send(users);
})

app.get('/users/create',(req,res)=> {
    res.sendFile(__dirname + '/createUser.html')
})

app.post('/users',(req,res)=> {
    let user = req.body;
    users.push({user});
    res.redirect('/')
})




//func para ouvir na porta 3000
app.listen('3000',() => console.log("Servidor ligado na porta 3000..."));
