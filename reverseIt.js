const reverseIt = function(string){
  if ( string.length === 1){
    return string[0];
  }
  let last = string.length - 1
  return string[last] + reverseIt(string.slice(0, last))
}

let str = "abcde"
console.log(reverseIt(str));