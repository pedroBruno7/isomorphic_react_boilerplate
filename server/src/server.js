import 'source-map-support/register';
import express from "express";
import bodyParser from "body-parser";
import path from "path";

import renderReactComponent from './renderReactComponent';

import users from '../data/users';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve() + "/dist/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve() + "/server/views");

app.get("/", (req, res) => {
  res.render("page1");
});

app.get('/api/users', (req, res) => {
      // throw new Error('coco1')
      res.send(JSON.stringify(users))
})

renderReactComponent(app, '/users', users);

renderReactComponent(app, '*');

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
