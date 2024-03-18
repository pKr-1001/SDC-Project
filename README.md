# MCSPA-2312A SDC Project

### By
pKr-1001 (Park)
The project was forked from FEC-Porject.

### Description
In this project, we will set up an NGINX server with load balancing to run a React app. Additionally, we will integrate Redis, a key-value pair database, into our system to enhance performance and functionality.

### Installation
1) Create a react app by executing npm create vite@latest
2) Execute ``npm install`` to install the dependencies:
3) Execute ``npm run dev`` and click on the localhost link in order to see the entire project
4) Execute ``npm run build`` Build for Docker, this command will build the project and generate the necessary production-ready files that Docker will use to create the Docker image

## NGINX Installation and Configuration
TO install NGINX, ensure that homebrew is installed, then run ``brew install nginx`` in your terminal.

After insalling, navigate to the NGINX directory by executing  `` cd /usr/local/etc/nginx `` in the terminal. Use your preferred code editor to open the ``nginx.conf`` file for configuration

### NGINX Configuration
To run NGINX locally with our project, we need to make changes to the ``nginx.conf`` file. Ensure that the configuration settings are appropriately adjusted for your project's requirements.

#### http Block

THe 'http' block contains configurations related to the HTTP protocol.

`` upstream backendserver {...} ``
defines a group of backend server to which requests will be proxied. NGINX will distribute requests among these servers using load balacning

`` server_name test;`` Defines e server name as test. This can be replaced wihth your actual domain name.

`` root /usr/share/nginx/html;`` specifies the root directory where NGINX should look for files to serve

`` proxy_pass http://backendserver/;`` Forwards requests to the backend servers defined in the backendserver upstream group.

`` add_header X-Upstream $upstream_addr always;`` Adds a custom header(X-Upstream) to the response indicating the backend server that processed the request.

#### events Block

No specific configurations are included in this block


#### Explanation

This NGINX configuration sets up a reverse proxy server that listens on port 8080 and forwards requests to a group of backend servers defined in the ``backendserver`` upstream group. Load balancing is applied to distribute requests among the backend servers. Custom headers are set to preserve client information and indicate the backend server that procoessed each request

## Docker

I used docker to run the backend servers for NGINX server.
Install the Docker from Docker website.

### Dockerfile
Create ``Dockerfile`` on your root folder.

Stage 1) Build the React application.
```
FROM node:16 AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
```

Stage 2) Serve the built React SPA using NGINX
```
FROM nginx:alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

Stage 3) Building Docker Image
``docker build . -t (name) ``
``docker run -p (port #):80 (name)`` This will run the backend server for NGINX locally, and your can map the port inside the container as needed. Ensure to include these servers in the ``nginx.conf`` file, for example ``server 127.0.0.1:1111;``
### Explanation

This dockerfile utilizes multi-stage builds to first build the React application using Node.js and then serve the built static files using NGINX. The Node.js image is used for the build stage to compile the React application, while the NGINX image is used for the final stage to server the compiled static files. By separating the build and runtime environments, the resulting Docker images is optimized for size and only contains the necessary runtime dependencies requires to serve the React application.

You can use Dockerfile to containerize your React application, ensuring consistency and portability across different environments. Adjust the file paths and configurations as needed on your project structure requirements

## Implement Redis

Redis is a versatile key-value pair database that we will integrate into our system to enhance its functionality and performance.

1) Run `` sudo apt-get install redis `` on your terminal

2) Start the Redis server by executing `` redis-server ``

3) Access access by running, `` redis-cli `` in the terminal

To measure the improvement in data retrieval speed, you can follow these steps:

Before Redis Integration:

Send a request to http://localhost:8888/mugs using Postman and note the time it takes to receive the response.

After Redis Integration:

Fetch data from the API and store it in the Redis database.
Modify your application logic to check if the data is already available in Redis before fetching it from the API.
Send the same request to http://localhost:8888/mugs using Postman and compare the time it takes to retrieve the response with the previous time.
By caching data in Redis, subsequent requests for the same data can be served much faster as the data is retrieved from memory rather than from the API. This can significantly reduce the response time and improve overall system performance, especially for frequently accessed data.

Keep in mind that the actual performance improvement may vary depending on factors such as the size of the dataset, network latency, and the efficiency of your caching strategy.

In this project, two features were implemented specifically for Redis caching related to retrieving mugs:
1) Getting all mugs
2) Getting one mug
