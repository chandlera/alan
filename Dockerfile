FROM denoland/deno:1.29.1 as base

WORKDIR /app

USER deno

COPY . ./

RUN deno cache deps.ts
RUN deno cache server.tsx

CMD ["run", "--allow-net", "--allow-read", "/app/server.tsx"]
