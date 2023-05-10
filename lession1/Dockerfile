FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
RUN npm install cookie-parser mongodb cors
COPY . .
EXPOSE 3000
CMD ["nodemon", "bin/www"]