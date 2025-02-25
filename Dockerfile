
FROM node:20.9.0

ENV NODE_ENV development


WORKDIR /app

COPY package*.json ./

COPY . .


RUN npm install


EXPOSE 3000


CMD npm run dev
