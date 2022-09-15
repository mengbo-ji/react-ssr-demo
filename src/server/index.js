import koa from 'koa';
import koaStatic from 'koa-static';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoute } from '../routes';

const app = new koa();

app.use(koaStatic('public'));

app.use(async ctx => {
  let context = { css: [] };
  
  const content = renderToString(
    <StaticRouter location={ctx.req.url} context={context}>
      <AppRoute />
    </StaticRouter>
  );
  console.log('content', content)
  ctx.body = `
    <html>
      <head>
        <title>ssr</title>
        <style>${context.css.join("\n")}</style>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src="./index.js"></script>
    </html>
  `
})


app.listen(5173, () => console.log('server is runing as port 5173'));
