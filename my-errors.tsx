/** @jsx h */
import { 
  h,
  renderToString, 
  Context,
  isHttpError
} from "./deps.ts";

import FourOhFour from "./src/components/404.tsx";
import FourOhFive from "./src/components/405.tsx";
import Main from "./src/components/layout/main.tsx";

export default async function MyErrors(ctx: Context, next: () => any) {
  try {
    await next();
  } catch (err) {
    let page;
    if (isHttpError(err)) {
      ctx.response.status = err.status;

      switch(err.status) {
        case 404: {
          page = <FourOhFour />;
          break;
        }
        default:
        case 405: {
          page = <FourOhFive />;
          break;
        }
      }

    } else {
      ctx.response.status = 500;
    }
    
    ctx.response.body = renderToString(<Main body={page} currentPath={new URL(ctx.request.url).pathname} />);
    ctx.response.type = 'html';
  }
}
