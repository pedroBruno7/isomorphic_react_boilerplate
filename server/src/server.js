import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve() + '/dist/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.resolve() + '/server/views');

app.get('/', (req, res) => {
    res.render('page1');
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve() + '/public/index.html')
})

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
});