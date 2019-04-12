import 'source-map-support/register';
import express from "express";
import bodyParser from "body-parser";
import path from "path";

import React from "react";
import { renderToNodeStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from '../../client/src/components/App';

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
  ]
};

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

app.get('/users', (req, res) => {
  const context = {};

  const stream = renderToNodeStream(
    <StaticRouter location={req.url} context={context}>
      <App dataFromDB={ users }/>
    </StaticRouter>
  );

  // const html = `
  //         <html>
  //           <head>
  //           </head>
  //             <body>
  //               <div id='root'>
  //                 ${content}
  //               </div>
  //               <script src="./client_bundle.js"></script>
  //             </body>
  //         </html>
  //       `;

  // res.send(html);

  res.write("<!DOCTYPE html><html><head></head><body>");
  res.write("<div id='root'>"); 
  stream.pipe(res, { end: false });
  stream.on('end', () => {
    res.write("</div><script src=\"./client_bundle.js\"></script></body></html>");
    res.end();
  });
})

app.get("*", (req, res) => {
  // res.sendFile(path.resolve() + '/public/index.html')
  const context = {};

  const stream = renderToNodeStream(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  // const html = `
  //         <html>
  //           <head>
  //           </head>
  //             <body>
  //               <div id='root'>
  //                 ${content}
  //               </div>
  //               <script src="./client_bundle.js"></script>
  //             </body>
  //         </html>
  //       `;

  // res.send(html);

  res.write("<!DOCTYPE html><html><head></head><body>");
  res.write("<div id='root'>"); 
  stream.pipe(res, { end: false });
  stream.on('end', () => {
    res.write("</div><script src=\"./client_bundle.js\"></script></body></html>");
    res.end();
  });
});

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
