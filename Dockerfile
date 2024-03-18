# Stage 1: Build the React application
FROM node:16 AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the built React SPA using Nginx
FROM nginx:alpine

# Remove the default Nginx configuration file
# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built React SPA files from the previous stage into Nginx's default serving directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose port 80 (or any other port you want to use)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
