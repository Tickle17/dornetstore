#!/bin/bash

readonly CONTAINER_NAME="dornetstore-nginx"

echo "Starting NGINX"

docker rm -f "${CONTAINER_NAME}"
docker run \
  --name "${CONTAINER_NAME}" \
  -v "$(pwd)/build:/usr/share/nginx/html:ro" \
  -v "$(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro" \
  -p 80:80 \
  nginx:1.25.0-alpine
