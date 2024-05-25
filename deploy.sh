#!/bin/bash




docker build -t website-v1:latest "."
docker rm -f website-v1 || true
docker run -d -p 19555:80 --restart=unless-stopped --name website-v1 website-v1
docker rmi $(docker images -f "dangling=true" -q) || true
docker ps
