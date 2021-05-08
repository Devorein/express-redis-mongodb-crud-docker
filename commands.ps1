# Interact with the docker container using bash shell
docker exec -it node-app bash

# Create the container from an image
docker run -v ${pwd}:/app:ro -v /app/node_modules -d -p 3000:3000 --name node-app node-app-image

# Show the logs from a specified container
docker logs node-app

# Build a docker image from a dockerfile
docker build -t node-app-image .