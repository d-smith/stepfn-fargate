var bs = require('./babysteps.js');
  
const workerName = 'actone-worker-' + bs.makeid();

const worker1activityFn = async (input) => {
    return {
        a: {
            foo: true,
            bar: false
        }
    };
}

const workTasks = async () => {
    for(;;) {
        await bs.performActivity(workerName, process.env.ACTONE_ARN, worker1activityFn);
    }
}

workTasks();
