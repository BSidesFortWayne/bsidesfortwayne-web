FROM node:lts-alpine3.22
ARG UID=1000
ARG GID=1000

RUN apk update
RUN apk add git

WORKDIR /workspace
RUN npm install astro