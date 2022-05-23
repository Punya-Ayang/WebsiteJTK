FROM node:14-alpine

ENV NODE_ENV prod

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 1337