'use strict';

const getMatCallStackSize = i => {
    try {
        return getMatCallStackSize(++i);
    } catch (e) {
        return i;
    }
};

console.log(getMatCallStackSize(0));