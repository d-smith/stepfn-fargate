var bs = require('babysteps');
  
const workerName = 'acttwo-worker-' + bs.makeid();

const worker2activityFn = async (input) => {
    let processData = input;
    if(typeof processData == 'string') {
        processData = JSON.parse(processData);
    }

    processData['stepB'] ={
        foo: true,
        bar: false
    };

    return processData;
}

const workTasks = async () => {
    for(;;) {
        await bs.performActivity(workerName, process.env.ACTTWO_ARN, worker2activityFn);
    }
}

workTasks();
