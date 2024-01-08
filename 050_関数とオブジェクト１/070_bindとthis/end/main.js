window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

// bind thisや引数を固定した関数を作成
// thisキーワードの参照先をbindで指定したpersonに設定
// person.hello とは別の関数として関数helloがメモリに確保される
const helloTom = person.hello.bind(person);

function fn(ref) {
    ref();
}

fn(helloTom);

function a(name) {
    console.log('hello ' + name);
}
const c = a.bind({name : 'Tim'});
const b = a.bind(null, 'Tim');

b();
c();
