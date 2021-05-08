# Build a docker image from a dockerfile
docker build -t node-app-image .

# Create the container from an image

## custom environment variable
docker run -v ${pwd}:/app:ro -v /app/node_modules -e PORT=4000 -d -p 3000:4000 --name node-app node-app-image

## environment variable file
docker run -v ${pwd}:/app:ro -v /app/node_modules --env-file ./.env -d -p 3000:4000 --name node-app node-app-image

# Interact with the docker container using bash shell
docker exec -it node-app bash

# Show the logs from a specified container
docker logs node-app

# Remove an image
docker image rm node-app-image

# Remove a container
docker rm node-app -f