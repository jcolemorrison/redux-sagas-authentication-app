const fs = require('fs')

const {
  AWS_ACCOUNT_ID,
  AWS_DEFAULT_REGION,
  IMAGE_REPO,
  DATE_TAG,
} = process.env

const params = {
  parameters: {
    WebTaskImage: `${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO}:${DATE_TAG}`,
  },
}

fs.writeFile('configure-cfn.json', JSON.stringify(params), 'utf8')
