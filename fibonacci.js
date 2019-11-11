const Fib = function(i){
  if (i < 1) return 0;
  if (i == 1) return 1;
  return Fib(i-1) + Fib(i-2);
}

console.log(Fib(8))