function* gen() {
    yield 1;
    yield 2;
    return 3;
}

const it = gen();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

/* 出力
% node 090_ジェネレーター/work/main.js                      
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: true }
{ value: undefined, done: true }
{ value: undefined, done: true }
*/

function* genIterator( max = 10 ) {
    let i = 0;
    while(i < max) {
        yield i++;
    }
    return; // 省略可
}

const iterator2 = genIterator(10);
let a = iterator2.next();
while(!a.done) {
  console.log(a.value);
  a = iterator2.next();
}

// 反復可能なオブジェクト
const obj = {
    [Symbol.iterator]: genIterator
}
console.log("obj")
for(let i of obj) {
    console.log(i)
}
