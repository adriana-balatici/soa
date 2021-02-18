FROM node:15

#app directory
WORKDIR /usr/src/app

#install dependencies
COPY package*.json ./

RUN npm install

#bundle app source
COPY . .

EXPOSE 5001

CMD ["node", "server.js"]
