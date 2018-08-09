var bs = require('./babysteps.js');
  
const workerName = 'acttwo-worker-' + bs.makeid();

const worker2activityFn = async (input) => {
    return {
        a: {
            foo: true,
            bar: false
        }
    };
}

const workTasks = async () => {
    for(;;) {
        await bs.performActivity(workerName, process.env.ACTTWO_ARN, worker2activityFn);
    }
}

workTasks();
