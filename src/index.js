export function test() {
    document.write('测试自定义包')
    console.log('test');
}

export { isObject} from './object/isObject';
export { flat } from './array/flat';
