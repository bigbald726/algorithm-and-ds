    /**
      字节的面试题，用js实现一个只能同时运行两个线程的节流器

     */

    // solution 1:
    // class Scheduler {
    //     queue = []
    //     count = 0
    //     maxNum = 2
    //
    //     async add(promiseCreator) {
    //         if (this.count >= this.maxNum) {
    //             await new Promise((res) => {
    //                 this.queue.push(res)
    //             })
    //         }
    //
    //         this.count ++
    //         const result = await promiseCreator()
    //         this.count --
    //         if (this.queue.length > 0) {
    //             this.queue.shift()()
    //         }
    //         return result
    //     }
    // }
    //
    // const scheduler = new Scheduler()
    // const timeout = (time) => {
    //     return new Promise(r => {
    //         setTimeout(r, time)
    //     })
    // }
    //
    // const addTask = (time, order) => {
    //     scheduler.add(() => timeout(time)).then(() => console.log(order))
    // }
    //
    // addTask(1000,1)
    // addTask(500,2)
    // addTask(300,3)
    // addTask(400,4)


    // solution 2:
    class Scheduler {
        constructor() {
            this.eruptArr = [];
            this.eruptNum = 2;
            this.curRun = [];
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



