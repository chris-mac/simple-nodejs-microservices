#Base our image on official Node image
FROM node:6.2

# Make the working directory and copy the project there
RUN mkdir -p /usr/local/myapp
WORKDIR /usr/local/myapp
COPY service1 /usr/local/myapp

# Expose ports
EXPOSE 3010

# Set the default command to execute
# when creating a new container
CMD ["npm","start"]
