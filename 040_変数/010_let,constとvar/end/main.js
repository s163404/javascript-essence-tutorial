// let, const は再宣言ができない。
// let a = 0;
// let a = 0;

var b = 0;
var b = 1;

let c = 0;
c = 1;

const d = 0;
// d = 1;

{
    let e = 0;
    var f = 0;
}
// let, constでの宣言はブロックスコープ。
// なので下記のconsole.logはエラー Uncaught ReferenceError e is not definedとなる。
// console.log(e);

// let, const のホイスティングは、メモリ確保はするが、undefindeの代入はされない。
// そのため下記はエラーとなる 
console.log(g);
console.log(h);
let g = 0;
var h = 0;

let a = 0;
