import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { useStaticRendering } from 'mobx-react';
import { configure } from 'mobx';

if (typeof window === undefined) {
  useStaticRendering(true);
}

configure({
  enforceActions: 'observed',
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
});

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    const { pathname, query } = parsedUrl;

    if (pathname === '/login') {
      app.render(req, res, '/login', query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`,
  );
});
