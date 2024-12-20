FROM node:22.9-alpine AS build

WORKDIR /app

COPY package.json ./

RUN npm install 

COPY . ./

RUN npm run build

