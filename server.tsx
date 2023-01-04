/** @jsx h */
import { 
  h,
  Application, 
  Context,
  send
} from "./deps.ts";
import MyErrors from "./my-errors.tsx";
import { router } from "./router.tsx";

const port = 7001;
const app = new Application();

app.use(MyErrors);

app.use(router.routes());
app.use(router.allowedMethods());

// TODO: add logging middleware, maybe sentry?

app.use(async (ctx: Context) => {
  await send(ctx, ctx.request.url.pathname, {
     root: `${Deno.cwd()}/public`
  });
});

app.addEventListener('listen', () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });
