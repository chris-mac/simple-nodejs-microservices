# Simple NodeJS microservices

## Intro
This repo includes a very simple NodeJS configuration for a microservice. It comprises an app `my-app` and a microservice `my-microservice` along with some code to build and publish a Docker image. That is it! 
The code is intended as a lightweight way to verify basic infrastructure and networking communications- it should certainly not be used as the basis of a microservice project or in a production context!

## Usage
Each of the folders contains a `build_tools` directory with a helper script `build-publish.sh`
The helper script expects 2 arguments:-
- VERSION (usually in semver format)
- REGISTRY_NAME a full URL of a Docker registry

### AWS ECR
There is code within the `build-publish.sh` script that will need uncommented to enable publishing to ECR
