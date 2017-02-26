#!/usr/bin/env bash

set -e
DATE_TAG=`date +%s%3N`

echo "Building image..."
docker build -t $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$IMAGE_REPO:$DATE_TAG .
echo "Creating configuration..."
node ./cfn/create-configure.js
echo "Pushing image"
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$IMAGE_REPO:$DATE_TAG
echo "Updating CFN"
aws cloudformation update-stack --stack-name autoscalae --use-previous-template \
  --parameters ParameterKey=WebTaskImage,ParameterValue=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$IMAGE_REPO:$DATE_TAG \
  ParameterKey=AutoScale,UsePreviousValue=true \
  ParameterKey=BastionSecurityGroup,UsePreviousValue=true \
  ParameterKey=DesiredCapacity,UsePreviousValue=true \
  ParameterKey=InstanceType,UsePreviousValue=true \
  ParameterKey=KeyPairName,UsePreviousValue=true \
  ParameterKey=MaxSize,UsePreviousValue=true \
  ParameterKey=SubnetID,UsePreviousValue=true \
  ParameterKey=VpcId,UsePreviousValue=true
