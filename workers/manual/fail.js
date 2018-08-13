var bs = require('babysteps');

const fail = async (input) => {
    throw "No go!"
}

const doTask = async () => {
    await bs.performActivity('human', process.env.MANUAL_ARN, fail);
}

try {
    doTask();
} catch(e) {
    console.log(e);
}