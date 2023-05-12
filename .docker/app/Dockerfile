FROM node:18.16.0-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install PNPM globally
RUN npm install pnpm -g

# Install dependencies
RUN pnpm install

# Copy the rest of the application code to the container
COPY . .

# Build the application for production
RUN pnpm build

# Install PM2 globally
RUN npm install pm2 -g

# Expose port 3000
EXPOSE 3000

# Start the application with PM2
CMD ["pm2-runtime", "pnpm", "--", "start"]
