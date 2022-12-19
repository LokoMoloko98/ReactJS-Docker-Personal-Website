# Use the official Node.js 10 image.
# https://hub.docker.com/_/node
FROM node:12.22.9

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependencies.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Run the webpack build script.
RUN npm run build

# Run the server when the container starts.
CMD [ "npm", "start" ]
