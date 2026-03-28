FROM node:lts-trixie
RUN apt update && apt install -y git

# Point to where we will bind-mount the host's SSH agent socket
ENV SSH_AUTH_SOCK=/ssh-agent
RUN printf 'Host *\n  StrictHostKeyChecking accept-new\n' > /etc/ssh/ssh_config

# Create the bsfw_dev user as an administrator
RUN groupadd bsfw_dev
RUN useradd -s /bin/bash -m -g bsfw_dev bsfw_dev
RUN chown -R bsfw_dev:bsfw_dev /home/bsfw_dev
USER bsfw_dev