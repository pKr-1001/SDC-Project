# MCSPA-2312A SDC Project


### Description
In this project, we will set up an NGINX server with load balancing to run a React app. Additionally, we will integrate Redis, a key-value pair database, into our system.

### Installation
1) Create a react app by executing npm create vite@latest
2) Execute ``npm install`` to install the dependencies:
3) Execute ``npm run dev`` and click on the localhost link in order to see the entire project


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

## Implement Redis

1) Run `` sudo apt-get install redis `` on your terminal

2) Start the Redis server by executing `` redis-server ``

3) Access access by running, `` redis-cli `` in the terminal

Redis is a versatile key-value pair database that we will integrate into our system to enhance its functionality and performance.
