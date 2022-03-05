FROM node:14

WORKDIR  /app

COPY . .

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1

RUN npm install \
    && npm install -g nodemon \
    && wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

WORKDIR /app/src
CMD [ "tail", "-f", "/dev/null" ]
EXPOSE 3000