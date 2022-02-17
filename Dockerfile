FROM arm64v8/node:16-alpine

COPY qemu-arm-static /usr/bin/qemu-arm-static

ENV NODE_ENV=production

WORKDIR /app

RUN apk add --no-cache --update tzdata && \
    rm -rf /var/cache/apk/*
RUN cp /usr/share/zoneinfo/UTC /etc/localtime && \
    echo "UTC" >  /etc/timezone

COPY dist/ssr .
COPY public/robots.txt www/
COPY public/sitemap.xml www/
COPY public/icons www/
COPY public/assets www/

RUN npm install --silent && npm cache clean --force

EXPOSE 3000

CMD  npm run start
