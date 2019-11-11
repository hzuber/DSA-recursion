const Fact = function(i){
  if (i <= 1) return 1;
  return i * Fact(i-1);
}

console.log(Fact(4))