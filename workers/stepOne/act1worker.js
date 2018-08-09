var bs = require('./babysteps.js');
  
const workerName = 'actone-worker-' + bs.makeid();

const worker1activityFn = async (input) => {
    if(typeof input == 'string') {
        input = JSON.parse(input);
    }


    let processData = {};
    processData['input'] = input;
    processData['stepA'] ={
        foo: true,
        bar: false
    };

    return processData;
}

const workTasks = async () => {
    for(;;) {
        await bs.performActivity(workerName, process.env.ACTONE_ARN, worker1activityFn);
    }
}

workTasks();
