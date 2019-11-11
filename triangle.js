const triangle = function(n){
  if ( n === 1){
    return 1
  }
  return n + triangle(n-1)
}

console.log(triangle(4))