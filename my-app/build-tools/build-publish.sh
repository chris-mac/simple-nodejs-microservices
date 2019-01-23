#!/bin/bash

# turn debugging on
set -ex

#Check we passed a version
if [ "$1" = "" ]
then
    echo "No version argument passed to the script, please pass a version"
    exit
fi

#Check we passed a registry name
if [ "$2" = "" ]
then
    echo "No registry name argument passed to the script, please pass a registry name"
    exit
fi

#Set version and config
VERSION=$1
APP_NAME='my-app'
REGISTRY_NAME=$2

NPM=$(/usr/bin/which npm)

cd ../app-code

"$NPM" install

cd ..

#To authenticate to AWS ECR uncomment the lines below and add your desired region
#aws ecr get-login --no-include-email --region us-east-1 >login.txt
#sh <login.txt
#rm login.txt

#Tag and publish image
docker build -t "${APP_NAME}":"${VERSION}" .
docker tag "${APP_NAME}":"${VERSION}" "${REGISTRY_NAME}"/"${APP_NAME}":"${VERSION}"
docker push "${REGISTRY_NAME}"/"${APP_NAME}":"${VERSION}"
