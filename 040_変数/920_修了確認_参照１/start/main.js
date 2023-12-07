/**
 * 問題：
 * 以下の操作を行った際にコンソールで表示される
 * 値はどうなるでしょうか？結果を考えてみてください。
 */
let val = 0;
let val2 = val;
val2 = 1;
console.log(val); // 問題１
// A. 0

let obj = {
    prop1: 10
}
const obj2 = obj;
obj2.prop1 = 9;

console.log(obj); // 問題２
// A. 

function fn1(arg) {
    arg.prop2 = 8;
    return arg;
}
let obj3 = fn1(obj2);
console.log(obj); // 問題３
// A. 


function fn2(arg) {
    arg = {};
    return arg;
}
const obj4 = fn2(obj); // 問題４
console.log(obj); // 問題４

// fn2に入った時点ではargもobjも同じオブジェクトを参照しているが
// arg = {} の時点でargには別のオブジェクトを参照していることになる
// 結果 objには変更がない
