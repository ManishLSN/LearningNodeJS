const express = require('express');
const hbs = require('hbs');

const app = express() // here we are initiating instance of express

app.set('view engine', 'hbs');

// creating routes
app.get('/', (req, res) => {
    console.log('browser requested : ' + req.url);
    res.render('home', {
        pageTitle: 'Ankit | Personal Website',
        heading : 'Welcome to my website',
        message : 'This site is made using NODEJS'
    } );
});

app.get('/about', (req, res) => {
    console.log('browser requested : ' + req.url);
    res.send('This is the about page of my site');    
});

app.get('/projects', (req, res) => {
    console.log('browser requested : ' + req.url);
    res.send('Welcome to my projects page.');    
});

app.get('/contact', (req, res) => {
    console.log('browser requested : ' + req.url);
    res.send('Get in touch');    
});
app.listen(3000, () => {
    console.log('Server listening to port 3000');
});