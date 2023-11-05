# Use an official Node.js runtime as the base image 
FROM node:14

# Set the working directory in the container 
WORKDIR /app

# Copy package.jason and package-lock.json to the container 
COPY package*.json ./

# Install app dependencies 
RUN npm install

# Copy the rest of your app's spurce code to the container 
COPY . .

# Expose the port your appwill run on 
EXPOSE 3000

# Command to start your web app
CMD ["npm", "start"]