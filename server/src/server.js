const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '..', '..', 'dist', 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

app.get('/', (req, res) => {
    res.render('page1');
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
});