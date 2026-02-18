FROM node:lts-alpine3.22
ARG UID=1000
ARG GID=1000

RUN apk update
RUN apk add git
RUN apk add openssh

# Point to where we will bind-mount the host's SSH agent socket
ENV SSH_AUTH_SOCK=/ssh-agent
RUN printf 'Host *\n  StrictHostKeyChecking accept-new\n' > /etc/ssh/ssh_config


WORKDIR /workspace
RUN npm install astro