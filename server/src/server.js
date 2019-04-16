import 'source-map-support/register';
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import renderReactSSR from './renderReactComponent';
import users from '../data/users';

// Express initial setup

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});


// Configs

app.use(express.static(path.resolve() + "/dist/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve() + "/server/views");




// Routes

app.get("/", (req, res) => {
  res.render("page1");
});

app.get('/api/users', (req, res) => {
      // throw new Error('coco1')
      res.send(JSON.stringify(users))
})

app.get('/users', (req, res) => {
  
  // note: res is a big object, passing it to memory could be avoided in the future by just returning the streams inside renderReactSSR
  // note2: avoid putting the render method inside renderReactSSR, bad practice - separation of concerns
  renderReactSSR(req.url, users, {}, res);
})



app.get('*', (req, res) => {

  // We need to put 404 here and not on React. 404 must be on the server. We are not going to render React just to have it render the same 404 page - performance issues.

  res.send("404")
})



