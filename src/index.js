exports.min = function min (array = "empty") {
  if (array === "empty" || array.length === 0) {
      return 0;
  } else {
      let min = array[0];
      for (let i = 0; i < array.length; i++) {
          if (min > array[i]) {
              min = array[i];
          }        
      }
      return min;
  } 
}

exports.max = function (array = "empty") {
  if (array === "empty" || array.length === 0) {
      return 0;
  } else {
      let max = array[0];
      for (let i = 0; i < array.length; i++) {
          if (max < array[i]) {
              max = array[i];
          }        
      }
      return max;
  }
}

exports.avg = function(array = "empty") {
  if (array === "empty" || array.length === 0) {
      return 0;
  } else {
      let sumOfEle = 0;
      for (let i = 0; i < array.length; i++) {
          sumOfEle += array[i];        
      }
      return sumOfEle / array.length;
  }
}
}
