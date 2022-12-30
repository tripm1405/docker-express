# 
# docker-compose -f docker-compose.yml -f [docker-compose_file] up -d --build
## up with dev
> docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
## up with prod
> docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

#
# docker-compose -f docker-compose.yml -f [docker-compose_file] down -v
## down with dev
> docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v
## down with prod
> docker-compose -f docker-compose.yml -f docker-compose.prod.yml down -v

# follow logs of service
# docker-compose logs -f [service]
> docker-compose logs -f docker-express