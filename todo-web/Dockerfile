# Dockerfile for build the app image
# Refer to the docker-compose.yaml for running the app

# Grab Base Image
FROM node:18-alpine

# Install NPM Dependencies
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
RUN apk update &&\ 
    apk upgrade &&\
    apk add curl

# Expose Localhost Port
EXPOSE 4200

# Start App
ENTRYPOINT ["npm", "start"]