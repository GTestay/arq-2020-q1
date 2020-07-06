FROM node:14.5.0-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn global add serve

RUN yarn run build

EXPOSE 3000

CMD ["serve", "-l", "tcp://0.0.0.0:3000", "-s", "build"]