/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 * 
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 * 
 * 
 * 例１）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 * 
 * 例２）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */
class Calculator {
	constructor() {
		this.former = null;
		this.operation;
	}

	set(num) {
		if (this.former === null) {
			this.former = num;
			return this;
		}
		if (this.operation === null) {
			this.former = num;
			return this;
		}

		// 値と計算方法が決まっていたら、計算を実行する。
		switch (this.operation) {
			case '+': 
				this.former += num;
				break;	
			case '-': 
				this.former -= num;
				break;
			case '*': 
				this.former *= num;
				break;
			case '/': 
				this.former /= num;
				break;
			default: 
				console.log('error: uncorrect input.');
		}
		console.log('result: ' + this.former);
		this.operation = null;
		return this;
	}

	plus() {
		this.operation = '+';
		return this;
	}
	minus() {
		this.operation = '-';
		return this;
	}
	multiply() {
		this.operation = '*';
		return this;
	}
	divide() {
		this.operation = '/';
		return this;
	}
}


const calc = new Calculator();

calc.set(10)
	.minus()
	.set(3)
	.multiply()
	.set(6)
	.divide()
	.set(2)
	.plus()
	.set(2)
