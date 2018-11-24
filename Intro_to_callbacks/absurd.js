const readline = require('readline');


const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const askIfGreaterThan = function(el1, el2, callback){
  reader.question(`Is ${el1} > ${el2} \n:`, (answer) => {
    if (answer === 'yes') {
      // console.log("counting a yes");
      callback(true);
    }
    else if (answer === 'no') {
      // console.log("counting a no");
      callback(false);
    }
    // console.log(`${answer}!`);
  });
  
  // console.log("whaaaat");
};

const innerBubbleSortLoop = function(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
  else {
    askIfGreaterThan(arr[i], arr[i+1], (answer) => {
      if (answer === true) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      }
      console.log(`${answer} line 34`);
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
};


const absurdBubbleSort = function(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else{
      sortCompletionCallback(arr);
    }
  }
  const madeAnySwaps = true;
  outerBubbleSortLoop(madeAnySwaps);
};


absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

