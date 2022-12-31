FROM denoland/deno:latest as base

WORKDIR /app

COPY . ./

USER deno

RUN deno cache deps.ts

RUN deno cache index.ts

CMD ["run", "--allow-net", "--allow-read=/app/src/,/app/public/", "/app/index.ts"]
