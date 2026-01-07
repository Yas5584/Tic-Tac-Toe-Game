# Use the official node js image as a base image
FROM node:20-alpine as build


WORKDIR /app


COPY package*.json ./

RUN npm install

COPY . .

RUN npm build


EXPOSE 8000

CMD ["npm","run","dev"]












































