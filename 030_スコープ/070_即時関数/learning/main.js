// 普通の関数
function a() {
    console.log('called');
}
a();


// 即時関数
(function() {
    console.log('called');
})()

// 関数スコープを利用して、関数内でしか使えない値/関数を利用するときに使う↓
let c = (function(d) {
    
    let privateVal = 0;
    let publicVal = 10;

    function privateFn() {
        console.log('privateFn is called');
    }
    function publicFn() {
        console.log('publicFn is called');
    }

    return {
        // この2つだけが返り値なので、スコープ外でも関数の代入先を通じて参照できる
        publicVal,
        publicFn
    }
})()
c.publicFn();
console.log(c.privateVal);



// 関数式を実行
let b = function () {
    console.log('called');
}();
