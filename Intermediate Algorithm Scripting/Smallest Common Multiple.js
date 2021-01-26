function smallestCommons(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });

  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  var quot = 0;
  var loop = 1;
  var n;

  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

smallestCommons([1, 5]);