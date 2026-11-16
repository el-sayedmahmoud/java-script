/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let num = init;

  function increment() {
    num++;
    return num;
  }

  function decrement() {
    num--;
    return num;
  }

  function reset() {
    num = init;
    return num;
  }

  return {
    increment,
    decrement,
    reset,
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */


  const counter = createCounter(5)
  console.log(counter.increment());
  console.log(counter.reset()); 
  console.log(counter.decrement()); 
 
