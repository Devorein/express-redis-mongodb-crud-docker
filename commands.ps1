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
## Remove a container with its associated volumes
docker rm node-app -fv

# See builded images
docker image ls

# See created containers
docker ps

# Show docker volumes
docker volume ls

# Delete docker volume
docker volume rm volume-name
docker volume prune

# Compose docker services
docker compose up -d

# Rebuilds the image forcefully when composing services
docker compose up -d --build

# Destroy docker services (deleting unnecessary volumes)
docker compose down -v

# docker compose in dev env
docker compose -f .\docker-compose.yml -f .\docker-compose.dev.yml up -d --build

# docker compose in prod env
docker compose -f .\docker-compose.yml -f .\docker-compose.prod.yml up -d --build