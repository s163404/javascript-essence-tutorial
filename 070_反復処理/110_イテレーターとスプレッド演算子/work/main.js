// 基本のスプレッド演算子
const arry1 = [1, 2, 3, 4, 5];
const arry2 = [...arry1, 6];

console.log(arry2)
console.log(arry1 === arry2)

function sum(...args) {
    let ret = 0;
    for(let v of  args) {
        ret += v;
    }
    return ret;
}
const result = sum(1, 2, 3, 4);
console.log(result)


// イテレータとスプレッド演算子
const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}
Object.prototype[Symbol.iterator] = function*() {
	for(let key in this) {
		yield [key, this[key]];
	}
}

// const arry3 = [...obj];
const arry3 = {...obj};
console.log(arry3);

