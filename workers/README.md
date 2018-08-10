To run locally, provide AWS credentials and region via environment variables, e.g.

docker run -it -e AWS_ACCESS_KEY_ID=aaaa -e AWS_SECRET_ACCESS_KEY=xxxx -e ACTONE_ARN=arn:aws:states:us-east-1:nnnn:activity:actone-sm1-dev -e AWS_REGION=us-east-1  stepz/sm1-step1-worker
