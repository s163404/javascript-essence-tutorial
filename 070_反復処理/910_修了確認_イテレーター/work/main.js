/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというイテレーターを生成する関数を作成しましょう。
 * 
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 * 
 * 以下のように実行した場合には
 * const it = genStep(4, 10, 2);
 * let a = it.next();
 * 
 * while(!a.done) {
 *  console.log(a.value); -> 4, 6, 8, 10
 *  a = it.next();
 * }
 * 
 * の値が順番にコンソールに表示されます。
 */

function genStep(min=1, max=10, step=1) {

    let i = min - step; // 最初の反復実行にてminの値が返されるようにstep文を引いている。
    return {
        next() {
            if (i < max) {
                i+=step;
                return { value: i, done: false  }
            } else {
                return { value: max, done: true }
            }
        }
    }
}

 
const it = genStep(4, 10, 2);
let a = it.next();

while(!a.done) {
  console.log(a.value);
  a = it.next();
}
