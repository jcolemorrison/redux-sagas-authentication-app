#!/usr/bin/env bash

set -e
DATE_TAG=`date +%s%3N`

echo "Building image..."
docker build -t $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$IMAGE_REPO:$DATE_TAG .
echo "Creating configuration..."
node ./cfn/create-configure.js
echo "Pushing image"
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$IMAGE_REPO:$DATE_TAG
