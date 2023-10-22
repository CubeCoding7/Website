const express = require('express')
const app = express()

app.use((req, res, next) => {
    res.locals.active = req.path;
    next();
});

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {title: "Home - CubeCoding"});
});

app.get('/about', (req, res) => {
    res.render('about', {title: "About - CubeCoding"});
});

app.get('/projects', (req, res) => {
    res.render('projects', {title: "Projects - CubeCoding"});
});

app.get('/contact', (req, res) => {
    res.render('contact', {title: "Contact - CubeCoding"});
});

app.listen(3000)
