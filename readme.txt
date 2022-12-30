#
> docker-compose up -d --build

#
> docker-compose down -v

# docker inspect [container]
> docker inspect docker-express-mongo-container
## NetworkSettings.Networks.tmp_default.IPAddress -> 172.31.0.2

# follow logs of service
# docker-compose logs -f [service]
> docker-compose logs -f docker-express