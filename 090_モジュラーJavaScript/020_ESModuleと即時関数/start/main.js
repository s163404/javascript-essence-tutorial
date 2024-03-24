const moduleA = (function () {

  console.log('IIFE called');

  let privateVal = 1;
  let publicVal = 10;

  function publicFn() {
    console.log('publicFn called: ' + publicVal++ );
  }

  function privateFn() {

  }

  return {
    publicFn,
    publicVal
  }
})();

moduleA.publicFn();
moduleA.publicFn();
moduleA.publicFn();
console.log(moduleA.publicVal);

// 出力
// IIFE called
// publicFn called: 10
// publicFn called: 11
// publicFn called: 12
// 10


// const moduleB = (function(moduleA) {
//   moduleA.publicFn();
//   moduleA.publicFn();
//   moduleA.publicFn();
//   console.log(moduleA.publicVal);
// })(moduleA);
const moduleB = (function({ publicFn, publicVal }) {
  publicFn();
  publicFn();
  publicFn();
  console.log(publicVal);
})(moduleA);