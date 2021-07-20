/**
 * WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。
 * a, 其键必须是对象，而值可以是任意的
 * b, 它的键被弱保持，也就是说，当其键所指对象没有其他地方引用的时候，它会被GC回收掉（这里注意一下）。WeakMap提供的接口与Map相同
 */

const w1 = new WeakMap([
    {key: {}, value: 1},
    {key: 2, value: 2},
]);
console.log(w1);