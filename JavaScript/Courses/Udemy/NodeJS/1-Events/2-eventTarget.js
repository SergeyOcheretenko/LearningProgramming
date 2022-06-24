'use strict';

const target = new EventTarget();

const logTarget = () => {
    console.log('Connected to target');
};

target.addEventListener('connected', logTarget);
target.dispatchEvent(new Event('connected'));