var bs = require('babysteps');

const happy = async (input) => {
    if(typeof input == 'string') {
        input = JSON.parse(input);
    }

    let processData = {};
    processData['input'] = input;
    processData['manual'] ={
        personSays: 'did my step'
    };

    return processData;
}

const doTask = async () => {
    await bs.performActivity('human', process.env.MANUAL_ARN, happy);
}

doTask();