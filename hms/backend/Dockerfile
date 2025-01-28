# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json first (for faster builds)
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of your backend code into the container
COPY . .

# Expose the backend's port (e.g., 5000)
EXPOSE 5000

# Command to start the backend server
CMD ["npm", "start"]
