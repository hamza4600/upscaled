export function generateId(text) {
    const words = text.trim().split(/\s+/);
    // Take the first 4 words
    const first4Words = words.slice(0, 4);

    // Join the words with hyphens, convert to lowercase, and return as an ID
    const id = first4Words.join("-").toLowerCase();

    return id;
}


export const throttle = (fn, wait) => {
    let inThrottle, lastFn, lastTime;
    return function () {
        const context = this,
            args = arguments;
        if (!inThrottle) {
            fn.apply(context, args);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(
                function () {
                    if (Date.now() - lastTime >= wait) {
                        fn.apply(context, args);
                        lastTime = Date.now();
                    }
                },
                Math.max(wait - (Date.now() - lastTime), 0)
            );
        }
    };
  };
  