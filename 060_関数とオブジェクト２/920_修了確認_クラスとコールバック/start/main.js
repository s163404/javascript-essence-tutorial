/**
 * 問題：
 * Person.helloメソッドをsetTimeoutで１秒後に
 * 実行しようとしましたが、"hello Bob"と表示されませんでした。
 * 
 * setTimeoutに渡す方法がおかしそうなのですが、
 * どのようにすればよいでしょうか？
 * 
 * ※２通りの方法で実装してみてください。
 */
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  hello() {
      console.log('hello ' + this.name);
  }
}

const bob = new Person('Bob', 23);
setTimeout(bob.hello, 1000);

// 元のsetTimeoutはbob.hello という"関数"を渡しているにすぎない
// 回答
// 1 thisをbobに設定する回答
setTimeout(bob.hello.bind(bob), 1000);
// 2 bobオブジェクトのhelloメソッドを実行する関数を渡すやり方
setTimeout(function() {
  bob.hello();
}, 1000);