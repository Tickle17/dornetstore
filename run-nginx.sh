#!/bin/bash

docker run -v "$(pwd)/build":/usr/share/nginx/html:ro -v "$(pwd)/nginx.conf":/etc/nginx/nginx.conf:ro -p 80:80 nginx
