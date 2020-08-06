#Base our image on official Node image
FROM node:14.7

# Set ARG defaults
ARG VERSION=beta
ARG INFRA_ENV=dev

# Make the working directory and copy the project there
RUN mkdir -p /usr/local/my-app
WORKDIR /usr/local/my-app
COPY service1 /usr/local/my-app

# Make ARGs available as env vars
ENV VERSION ${VERSION}
ENV INFRA_ENV ${INFRA_ENV}

# Expose ports
EXPOSE 3010

# Set the default command to execute
# when creating a new container
CMD npm start
