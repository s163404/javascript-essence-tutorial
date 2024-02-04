const items = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

// イテレータオブジェクトを作成する

// イテレータを返す関数
Object.prototype[Symbol.iterator] = function() {
	const keys = Object.keys(this);
	let i = 0;

	/*
	・イテレータがオブジェクトを返すためには next() で参照できる必要がある
	・今回は this キーワードによってitemsを参照する。
	・となれば next() 内でthisキーワードを使うと、 return "{...}" を参照する => items でないので期待する動作ではない
	・thisを_thisに登録しておき、next() で_thisを参照する実装にしておくと、実行時にnext()内からスコープチェーンを外にたどることで_thisでthiｓの参照にたどりつける。
	*/
	let _this = this;
	// イテレータを返す
	return {
		next() {
			let key = keys[i++];
			return {
				// value: [key, _this[key]],
				value: [key, _this[key]],
				done: i > keys.length
			}
		}
	}
}

for (let item of items) {
	console.log(item)
}