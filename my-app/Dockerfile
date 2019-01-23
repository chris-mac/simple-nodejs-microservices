#Base our image on official Node image
FROM node:6.2

# Make the working directory and copy the project there
RUN mkdir -p /usr/local/my-app
WORKDIR /usr/local/my-app
COPY app-code /usr/local/my-app

# Expose ports
EXPOSE 3000

# Set the default command to execute
# when creating a new container
CMD ["npm","start"]
