FROM node:14.17.0-alpine 
WORKDIR /app
COPY ./package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn run build:fullstack
# EXPOSE 3000 Heroku sets its own port, uncomment for local run
CMD ["yarn", "run", "start:prod"]