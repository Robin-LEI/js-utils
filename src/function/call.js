// es11 globalThis 全局对象

/**
 * @param {*} Fn 
 * @param {*} obj 
 * @param  {...any} args 
 */

export function call(Fn, obj, ...args) {
    if (obj === null || obj === undefined) {
        obj = globalThis;
    }
    obj.fn = Fn;
    let result = obj.fn(...args);
    delete obj.fn;
    return result;
}