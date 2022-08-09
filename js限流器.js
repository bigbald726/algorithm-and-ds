/**
 * js实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有2个，完善下面代码中的Scheduler类，使得一下程序正确输出
 *
 */
class Scheduler {
    constructor() {
        this.eruptArr = [];
        this.eruptNum = 2;
        this.curErupt = [];
    }

    add(promiseCreator) {
        this.eruptArr.push(promiseCreator);
        return this.executor();
    }

    executor() {
        if (this.curErupt.length < this.eruptNum && this.eruptArr.length) {
            const task = this.eruptArr.shift();
            const promise = task().then(() => {
                this.curErupt.splice(this.curErupt.indexOf(promise), 1);
            });
            this.curErupt.push(promise);
            return promise;
        } else {
            return Promise.race(this.curErupt).then(() => {
                this.executor();
            });
        }
    }
}

const timeout = (time) =>
    new Promise((resolve) => {
        setTimeout(resolve, time);
    });

const scheduler = new Scheduler();

const addTask = (time, order) => {
    scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");

// output 2 3 1 4
// 一开始 1 2 两个任务进入队列
// 500ms时， 2完成输出2 任务3进队列
// 800ms时，3完成输出3，任务4进队列
// 1000ms时，1完成，输出1
