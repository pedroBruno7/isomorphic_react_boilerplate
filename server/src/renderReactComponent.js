import React from "react";
import { renderToNodeStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from '../../client/src/components/App';

export default function(app, route = '', data = {}) {
  app.get(route, (req, res) => {
    const context = {};

    const stream = renderToNodeStream(
      <StaticRouter location={req.url} context={context}>
        <App dataFromDB={data} />
      </StaticRouter>
    );

    res.write('\
      <!DOCTYPE html>\
      <html lang="en">\
          <head>\
            <meta charset="UTF-8">\
            <meta name="viewport" content="width=device-width, initial-scale=1.0">\
            <meta http-equiv="X-UA-Compatible" content="ie=edge">\
            <title>Document</title>\
          </head>\
          <body>\
    '
    );
    res.write("<div id='root'>");
    stream.pipe(res, { end: false });
    stream.on("end", () => {
      res.write('\
            </div>\
            <script src="./client_bundle.js"></script>\
          </body>\
        </html>\
      '
      );
      res.end();
    });
  });
}

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
    <script src="./client_bundle.js"></script>
</body>
</html>
*/
