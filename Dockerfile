FROM node:16.17

WORKDIR /code/docker-express

COPY package.json .

ARG NODE_ENV

RUN if [ "$NODE_ENV" = "development" ]; then npm i; else npm i --only=production; fi

COPY . .

ENV PORT 5500

EXPOSE $PORT

CMD ["npm", "run", "dev"]