import { extname, Handlebars } from "./deps.ts";

const server = Deno.listen({ port: 7001 });

for await (const conn of server) {
  handleHttp(conn).catch(console.error);
}

async function handleHttp(conn: Deno.Conn) {
  const hbs = new Handlebars(
    {
      baseDir: 'src/views',
      extname: '.hbs',
      layoutsDir: 'layouts/',
      partialsDir: 'partials/',
      cachePartials: true,
      defaultLayout: 'main',
      helpers: undefined,
      compilerOptions: undefined,
    }
  );

  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    // Use the request pathname as filepath
    const url = new URL(requestEvent.request.url);
    const filepath = decodeURIComponent(url.pathname).replace('/', '');

    if (['.svg', '.png', '.css', '.ico', '.js'].includes(extname(filepath))) {
      let file;
      try {
        file = await Deno.open(`./${filepath}`, { read: true });
      } catch {
        // If the file cannot be opened, return a "404 Not Found" response
        const notFoundResponse = new Response("404 Not Found", { status: 404 });
        await requestEvent.respondWith(notFoundResponse);
        return;
      }

      // Build a readable stream so the file doesn't have to be fully loaded into
      // memory while we send it
      const readableStream = file.readable;

      // Build and send the response
      const response = new Response(readableStream);
      await requestEvent.respondWith(response);
    } else {
      let result;
      try {
        // file = await Deno.open("." + filepath, { read: true });
        if (!filepath) {
          result = await hbs.renderView('index');
        } else {
          result = await hbs.renderView(filepath);
        }
      } catch {
        result = await hbs.renderView('fourohfour');
        // If the file cannot be opened, return a "404 Not Found" response
        const notFoundResponse = new Response(
          result, 
          { 
            status: 404, 
            headers: {
              'content-type': 'text/html'
            } 
          }
        );
        await requestEvent.respondWith(notFoundResponse);
      
        return;
      }

       // Build a readable stream so the file doesn't have to be fully loaded into
      // memory while we send it
      // const readableStream = file.readable;

      // Build and send the response
      const response = new Response(
        result,
        { 
          status: 200, 
          headers: {
            'content-type': 'text/html'
          } 
        }
      );
      await requestEvent.respondWith(response);
    }
    

   
  }
}
