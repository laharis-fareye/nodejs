FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 7878
EXPOSE 3009

# Define environment variables
ENV PORT=3009
ENV API_KEY=$OPENWEATHERMAP_API_KEY

# Command to run the application
CMD ["node", "forecast.js"]