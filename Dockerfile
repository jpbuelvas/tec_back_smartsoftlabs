FROM node:13

WORKDIR /usr/src/dist

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]