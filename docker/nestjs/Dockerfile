# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install NestJS CLI globally
RUN npm install -g @nestjs/cli

# Copy the rest of the project files
COPY . .

# Expose app port
EXPOSE 3000

# Start the app in development mode
CMD ["npm", "run", "start:dev"]