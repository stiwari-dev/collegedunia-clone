const throttle = (func, limit) => {
    let execute = true;
    return (...args) => {
        if (execute) {
            func(...args);
            execute = false;
            setTimeout(() => {
                execute = true;
            }, limit);
        }
    };
};

export default throttle;