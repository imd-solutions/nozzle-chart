# Dockerfile
FROM node:lts-alpine3.16

# create dist directory
RUN mkdir -p /app
WORKDIR /app

# update and install dependency
RUN apk update && apk upgrade

# copy the app, note .dockerignore
COPY package.json ./app
COPY . /app

RUN npm install --legacy-peer-deps
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]
