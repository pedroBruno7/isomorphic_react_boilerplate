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

    res.write("<!DOCTYPE html><html><head></head><body>");
    res.write("<div id='root'>");
    stream.pipe(
      res,
      { end: false }
    );
    stream.on("end", () => {
      res.write(
        '</div><script src="./client_bundle.js"></script></body></html>'
      );
      res.end();
    });
  });
}
