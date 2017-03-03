#!/usr/bin/env bash

set -e
DATE_TAG=`date +%s%3N`

echo "Building image..."
docker build -t $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$IMAGE_REPO:$DATE_TAG .
echo "Pushing image"
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$IMAGE_REPO:$DATE_TAG
echo "Updating CFN"
aws cloudformation update-stack --stack-name vpcity-web --use-previous-template --capabilities CAPABILITY_IAM \
  --parameters ParameterKey=WebTaskImage,ParameterValue=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$IMAGE_REPO:$DATE_TAG \
  ParameterKey=BastionSecurityGroup,UsePreviousValue=true \
  ParameterKey=DesiredCapacity,UsePreviousValue=true \
  ParameterKey=InstanceType,UsePreviousValue=true \
  ParameterKey=KeyPairName,UsePreviousValue=true \
  ParameterKey=MaxSize,UsePreviousValue=true \
  ParameterKey=SubnetID,UsePreviousValue=true \
  ParameterKey=VpcId,UsePreviousValue=true
