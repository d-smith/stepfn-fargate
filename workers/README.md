
## Create the ECR repositories

aws ecr create-repository --repository-name stepz/sm1-step1-worker
aws ecr create-repository --repository-name stepz/sm1-step2-worker

## Build

make

## Push to AWS

```console
`aws ecr get-login --no-include-email`
docker tag stepz/sm1-step1-worker nnnn.dkr.ecr.us-east-1.amazonaws.com/stepz/sm1-step1-worker
docker push nnnn.dkr.ecr.us-east-1.amazonaws.com/stepz/sm1-step1-worker
docker tag stepz/sm1-step2-worker nnnn.dkr.ecr.us-east-1.amazonaws.com/stepz/sm1-step2-worker
docker push nnnn.dkr.ecr.us-east-1.amazonaws.com/stepz/sm1-step2-worker
```

## Run Locally

To run locally, provide AWS credentials and region via environment variables, e.g.

docker run -it -e AWS_ACCESS_KEY_ID=aaaa -e AWS_SECRET_ACCESS_KEY=xxxx -e ACTONE_ARN=arn:aws:states:us-east-1:nnnn:activity:actone-sm1-dev -e AWS_REGION=us-east-1  stepz/sm1-step1-worker
