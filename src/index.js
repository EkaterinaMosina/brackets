module.exports = function check(str, bracketsConfig) {
  let arr=[];
  
  for (let arg of bracketsConfig) {
    arr.push(arg.join(''))
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (str.includes(arr[i])) {
      str = str.replace(arr[i], '');
      i = -1;
    }
  }

  if (str.length === 0) {
    return true
  } else {
    return false
  }

}

