FROM denoland/deno:1.29.1

EXPOSE 7001

WORKDIR /usr/src/app

USER deno

COPY deps.ts .
RUN deno cache deps.ts

ADD . .

RUN deno cache index.ts

CMD ["run", "--allow-net", "--allow-read=src,public", "/usr/src/app/index.ts"]
