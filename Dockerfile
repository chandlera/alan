FROM denoland/deno:1.29.1

EXPOSE 7001

WORKDIR /usr/src/app

USER deno

COPY deps.ts .
RUN deno cache deps.ts

ADD . .

CMD ["run", "--allow-net", "/usr/src/app/index.ts"]
