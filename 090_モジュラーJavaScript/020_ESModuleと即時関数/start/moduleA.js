// main.js のmoduleAをESModule形式に書き換え
console.log('ESModule called');

let privateVal = 1;
export let publicVal = 10;

export function publicFn() {
  console.log('publicFn called: ' + publicVal++ );
}

function privateFn() {

}
