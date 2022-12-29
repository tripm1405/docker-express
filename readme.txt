# create image
# docker build -t [image] .
> docker build -t docker-express-image .

# run image
# docker run -v [pwd:workdir:ro] -v [node_modules] -p [PORTS] -d --name [container] [image]
## pwd: ${pwd} / %cd%
> docker run -v ${pwd}:/code/docker-express:ro -v /code/docker-express/node_modules --env-file ./.env -p 5500:5500 -d --name docker-express-container docker-express-image

# open bash
# docker exec -it [container] bash
> docker exec -it docker-express-container bash
## exit bash
> exit

# remove container
# docker rm [container] -fv
> docker rm docker-express-container -fv