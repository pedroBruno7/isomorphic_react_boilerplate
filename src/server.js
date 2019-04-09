import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './components/App';


// const { CLIENT_ONLY } = process.env;
const CLIENT_ONLY = false;
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use('/static', express.static('public'));


app.get('/api/users', (req, res) => {

  const users ={ 
    users: [
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "d", age:23},
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "d", age:23},
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "d", age:23},
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "d", age:23},
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "d", age:23},
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "micael", age:44}
  ]}

  res.send(JSON.stringify(users))

})


app.get('/users', async (req, res) => {

  const context = {};

  res.render('layout', {
    content: ReactDOMServer.renderToString(
      CLIENT_ONLY
      ? '' 
      : (
        
          <StaticRouter location={req.url} context={context}>
            <App dataFromDB={{users: [
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "d", age:23},
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "d", age:23},
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "d", age:23},
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "d", age:23},
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "d", age:23},
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "micael", age:44}
  ]}}/>
          </StaticRouter>
       
      )
    )
  });
});


app.get('*', async (req, res) => {

  const context = {};

  res.render('layout', {
    content: ReactDOMServer.renderToString(
      CLIENT_ONLY
      ? '' 
      : (
        
          <StaticRouter location={req.url} context={context}>
            <App dataFromDB={{name: "yo"}}/>
          </StaticRouter>
       
      )
    )
  });
});

app.listen(3000, () => console.log('App listening at 3000'));
