#!/bin/bash

# turn debugging on
set -ex

#Check we passed a version
if [ "$1" = "" ]
then
    echo "No version argument passed to the script, please pass a version"
    exit
fi

# Set version and config
VERSION=$1
APP_NAME='my-microservice'
REGISTRY_NAME=${2:-UNSET}
PUBLISH=${3:-"--no-publish"}

NPM=$(/usr/bin/which npm)

cd ../service1

"$NPM" install

cd ..

docker build -t "${APP_NAME}":"${VERSION}" --build-arg "VERSION=${VERSION}" --build-arg "INFRA_ENV=dev" .

if [ ${PUBLISH} = "--publish-ecr" ]; then
  aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin ${REGISTRY_NAME}/${APP_NAME}
fi


# Tag and publish image
if [ ${PUBLISH} = "--publish" ] || [ ${PUBLISH} = "--publish-ecr" ]; then
  docker tag "${APP_NAME}":"${VERSION}" "${REGISTRY_NAME}"/"${APP_NAME}":"${VERSION}"
  docker push "${REGISTRY_NAME}"/"${APP_NAME}":"${VERSION}"
fi
