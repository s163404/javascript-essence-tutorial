/**
 * 問題１：
 * 以下のコンソールにはどのような値が表示されるでしょうか？
 */
console.log("0 == false", 0 == false);
// A. オペランドの型が異なる場合は、比較前に同じ型に変換を試みる。片方が論理値の場合、論理値がfalseの場合は+0に変換する。
// よって　0 と　 0　の　比較となり、結果true。

console.log("0 === false", 0 === false);
// A. 型が違うため、false

console.log('"false" == false', "false" == false);
// A.  
// 1. false が　 0に変換される
// 2. "false"が trueに変換
// 3. true と 0を比較　 ｰ> false

console.log('"0" == 0', "0" == 0);
// A. "0"がfalseに変換される　ｰ> true

console.log('Boolean("0") === false', Boolean("0") === false);
// A. 左辺がtrueとなるため、false

console.log('Boolean(0) === false', Boolean(0) === false);
// A. false同士の比較なのでtrue

console.log('!Boolean(0) === false', !Boolean(0) === false);
// A. trueとfalseの比較なのでfalse

console.log('-1 == false', -1 == false);
// A. false が　０に変換される　-1と0の比較となり、false

console.log('!10 === false', !10 === false);
// A. 10の論理否定でfalseとなり、false同士の比較ー＞ true

/**
 * 問題２：
 * 関数fnの引数numが渡ってこない場合（undefinedまたはnullの場合）のみ、
 * 初期値として-1を設定したいものとします。
 * 
 * 以下の関数fnの初期化を適切に書き直してください。
 * ※aには0以上の整数値が渡ってくるものとします。
 */
let a = null;

function fn(num) {
    if (num === undefined || num === null) {
        num = -1;
    }
    console.log(num);
}
fn(a);


/**
 * 問題３：
 * 以下のコードを実行した際にコンソールに
 * 期待の出力を行うような関数greetingを
 * 作成してみてください。
 *
 * greeting("Bob", "hi"); -> 出力結果："hi, Bob"
 * greeting("Bob"); -> 出力結果："hello, Bob"
 *
 */
function greeting(name, greet) {
    // if (!greet) { 
    //     greet = 'hello';
    // }
    greet = greet || 'hello'; //undefinedの場合 falsyとなり、'hello'を判定する。'hello'はtruesyなので、trueとなり、greetは'hello'が入る
    console.log(`${greet}, ${name}`);
}

greeting("Bob", "hi");
greeting("Bob");
// 引数を渡さないと、greet はundefinedとなる