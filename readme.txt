#
> docker-compose up -d --build

#
> docker-compose -rmi local down -v

# docker inspect [container]
> docker inspect docker-express-mongo-container
## NetworkSettings.Networks.tmp_default.IPAddress -> X.X.X.X

# follow logs of service
# docker-compose logs -f [service]
> docker-compose logs -f docker-express