FROM node:16.17

WORKDIR /code/docker-express

COPY package.json .

RUN npm i

COPY . .

ENV PORT 5500

EXPOSE $PORT

CMD ["npm", "run", "dev"]