FROM node
LABEL name = 'vue-service'
LABEL version = '1.0'
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 8083
CMD npm start