# state-machine

This state machine is a step function state machine. Here the serverless framework and the serverless-step-functions plugin is used for the deployment.

To deploy the state machine, use the usual serverless framework deployment commands, e.g.

```console
sls deploy --aws-profile <profile>
```

To deploy the dashboard:

```console
aws cloudformation create-stack --stack-name ProcessADashboard --template-body file://dashboard.yml --parameters ParameterKey=DashboardName,ParameterValue='sm1-dev-dashboard' ParameterKey=StateMachineArn,ParameterValue=arn:aws:states:us-east-1:nnnn:stateMachine:sm1-dev
```
