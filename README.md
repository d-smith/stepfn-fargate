# stepfn-fargate

Host your activity processors via Fargate

This project consists of three pieces:

1. A Step Functions state machine and API to start the state machine, created using the serverless framework and the serverless-step-functions plug in.
2. Activity processes to process the step activities, which can be run directly then packaged and uploaded into ECR
3. Cloud formation templates to create a VPC, define ECS tasks for Fargate, then instantiate ECS services in the Fargate cluster.

Refer to the README files in the subdirectories for more details.