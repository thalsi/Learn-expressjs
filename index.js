const express = require('express');
const app = express();
const port = 3000;

//post methord use this
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//medilware 
app.use((req, res, next) => {
    console.log('gobal middilware work...!!!');
    next();
})

//router
const user = require('./user/user');

app.use('/user', user);

app.get('/', (req, res) => {
    res.send('Hello world..!')
});

// http Methords
app.get('/get', (req, res) => {
    res.send('get methord');
});

app.post('/post', (req, res) => {
    res.send('post methord');
});

app.put('/put', (req, res) => {
    res.send('put methord');
});

app.delete('/delete', (req, res) => {
    res.send('Delete methord');
});

app.listen(port, () => console.log(" Server running..." + port));