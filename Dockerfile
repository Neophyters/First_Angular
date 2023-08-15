# Dockerfile for build the app image
# Refer to the docker-compose.yaml for running the app
FROM node:18-alpine

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install

COPY . /app

EXPOSE 4200

ENTRYPOINT ["npm", "start"]