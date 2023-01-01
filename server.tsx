/** @jsx h */
import { h, serve, renderToString } from "./deps.ts";
import Index from "./src/components/home.tsx";
import FourOhFour from "./src/components/404.tsx";

import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import staticFiles from "https://deno.land/x/static_files@1.1.6/mod.ts";
import Main from "./src/components/main.tsx";
import Projects from "./src/components/projects.tsx";
import Contact from "./src/components/contact.tsx";

// const serveFiles = (req: Request) => staticFiles('public')({ 
//     request: req, 
//     respondWith: (r: Response) => r 
// })

const port = 7001;
const app = new Application();

const router = new Router();

router.get('/', (ctx) => {
  const page = (
    <main className="blurb">
      <div className="blurb__left">
        <Index />
      </div>
    </main>
  );

  ctx.response.body = renderToString(<Main body={page} currentPath={new URL(ctx.request.url).pathname} />);
  ctx.response.type = 'html';
});

router.get('/projects', (ctx) => {
  const page = (
    <main className="blurb">
      <div className="blurb__left">
        <Projects />
      </div>
    </main>
  );

  ctx.response.body = renderToString(<Main body={page} currentPath={new URL(ctx.request.url).pathname} />);
  ctx.response.type = 'html';
});


router.get('/contact', (ctx) => {
  const page = (
    <main className="blurb">
      <div className="blurb__left">
        <Contact />
      </div>
    </main>
  );

  ctx.response.body = renderToString(<Main body={page} currentPath={new URL(ctx.request.url).pathname} />);
  ctx.response.type = 'html';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (context) => {
  await send(context, context.request.url.pathname, {
     root: `${Deno.cwd()}/public`
  });
});

app.addEventListener('listen', () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });

// function handler(_req: Request): Response {
//   const currentUrl = new URL(_req.url);
//   let page = (
//     <FourOhFour />
//   );

//   console.log(currentUrl.pathname);

//   if (currentUrl.pathname.startsWith('/public')) {
//     console.log('haha');

//     serveFiles(_req);
//   } else {
//     switch(currentUrl.pathname) {
//       case 'index':
//       default: {
//         page = (
//           <main className="blurb">
//             <div className="blurb__left">
//               <Index />
//             </div>
//           </main>
//         );
//       }
//     }
//   }

//   const html = renderToString(page);
//   return new Response(html, {
//     headers: { "content-type": "text/html; charset=utf-8" },
//   });
// }

// serve(handler);