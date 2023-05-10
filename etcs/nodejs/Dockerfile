FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

WORKDIR /appep
RUN npx express-generator

WORKDIR /app
EXPOSE 8080
CMD [ "node", "server.js" ]