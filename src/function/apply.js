
export function apply(Fn, obj, args) {
    obj = obj || window;
    obj.fn = Fn;
    let result = obj.fn(...args);
    delete obj.fn;
    return result;
}