const AWS = require('aws-sdk');
var proxy = require('proxy-agent');    
AWS.config.update({
    httpOptions: { agent: proxy(process.env.HTTPS_PROXY) }
});

var stepfunctions = new AWS.StepFunctions();

const hasData = (o) => {
    return Object.keys(o).length > 0;
};

module.exports.makeid = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 8; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

module.exports.performActivity = async (workerName, activityArn, activityFunc) => {
    let params = {
        activityArn: activityArn,
        workerName: workerName
    };

    let activityData = await stepfunctions.getActivityTask(params).promise();
    if(!hasData(activityData)) {
        console.log('no data to process');
        return;
    }


    console.log(activityData);
    taskToken = activityData['taskToken'];
    taskInput = activityData['input'];

    console.log(`task input is ${taskInput}`);
    

    try {
        console.log('form output data');
        outputData = await activityFunc(taskInput);
        console.log(`output data: ${JSON.stringify(outputData)}`);

        console.log('send task success');
        let completeOut = await stepfunctions.sendTaskSuccess(
            {
                output: JSON.stringify(outputData),
                taskToken: taskToken
            }
        ).promise();

        console.log(`sendTaskSuccess return ${JSON.stringify(completeOut)}`);
    } catch(e) {
        console.log(`Something went wrong: ${e}`);
        params = {
            taskToken: taskToken,
            cause: 'Activity function generated an exception',
            error: e.message
        };
        let tfOut = await stepfunctions.sendTaskFailure(params).promise();
        console.log(tfOut);
    }
}