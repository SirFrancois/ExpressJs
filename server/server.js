const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser')

let app = express();

//Advanced work
app.use(bodyParser.urlencoded({ extended: false}));

app.post('/contact-form', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.name);
    res.send('Thank you for submitting your contact form bro')
});


//app.get('/',(req,res) => {
//    res.send('Hello from the web server siiiiiiiiiiiiidddde');
//});

//app.listen(3000);


//HTML Portion
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
//CSS Portion
app.get('/css/styles.css',(req, res) => {
    res.sendFile(path.join(__dirname, '../public/css/styles.css'));
});




//super special middleware logger
app.use((req, res, next) => {
    fs.appendFileSync('log.txt',`${req.url}\n`);
    next();
});


//JS Portion
// app.get('/', (req, res) => {
//     res.send('HeLLo World!');
// })
app.use(express.static(path.join(__dirname, '../public')));

//middleware
//app.use('/order/:name', (req, res) => {
//    let name = req.params.name;
//    let email = req.query.email;
//    res.send(`Your name is ${name}and email is ${email}`);
//})


app.listen(3000);

