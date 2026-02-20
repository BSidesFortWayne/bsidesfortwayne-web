FROM node:lts-alpine3.22

RUN apk update
RUN apk add git
RUN apk add openssh

# Point to where we will bind-mount the host's SSH agent socket
ENV SSH_AUTH_SOCK=/ssh-agent
RUN printf 'Host *\n  StrictHostKeyChecking accept-new\n' > /etc/ssh/ssh_config

RUN addgroup -S bsfw_dev 
RUN adduser -S bsfw_dev -G bsfw_dev -s /bin/sh
USER bsfw_dev