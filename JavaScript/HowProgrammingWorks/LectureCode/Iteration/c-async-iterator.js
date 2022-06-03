'use strict';

const range = {
    start: 1,
    end: 10,
    [Symbol.asyncIterator]() {
        let value = this.start;
        return {
            next: () => Promise.resolve({
                value,
                done: value++ === this.end + 1
            })
        };
    }
};

(async () => {
    for await (const number of range) {
        console.log(number);
    }
})();