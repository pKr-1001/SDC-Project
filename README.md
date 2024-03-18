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

## Implement Redis

1) Run `` sudo apt-get install redis `` on your terminal

2) Start the Redis server by executing `` redis-server ``

3) Access access by running, `` redis-cli `` in the terminal

Redis is a versatile key-value pair database that we will integrate into our system to enhance its functionality and performance.
