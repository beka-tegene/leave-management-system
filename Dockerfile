# Use an official Node.js runtime as the base image
FROM node:18.12.1

# Set the working directory in the container to /src
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Build the React.js app
RUN npm run build

# Expose the port the app will run on (React's default is 3000)
EXPOSE 80

# Start the React.js app
CMD ["npm", "start"]