/** @jsx h */
import { 
    h, 
    renderToString, 
    Context, 
    Router
} from "./deps.ts";

import Index from "./src/components/home.tsx";
import Main from "./src/components/layout/main.tsx";
import Projects from "./src/components/projects.tsx";
import Contact from "./src/components/contact.tsx";

const router = new Router();

router.get('/', (ctx: Context) => {
  const page = (<Index />);

  ctx.response.body = renderToString(<Main body={page} currentPath={new URL(ctx.request.url).pathname} />);
  ctx.response.type = 'html';
});

router.get('/projects', (ctx: Context) => {
  const page = (
      <Projects />
  );

  ctx.response.body = renderToString(<Main body={page} currentPath={new URL(ctx.request.url).pathname} />);
  ctx.response.type = 'html';
});


router.get('/contact', (ctx: Context) => {
  const page = (
    <Contact />
  );

  ctx.response.body = renderToString(<Main body={page} currentPath={new URL(ctx.request.url).pathname} />);
  ctx.response.type = 'html';
});

export {
  router
};