const powerCalculator = function(i, e){
  if (e < 0){
    return "exponent should be >= 0"
  } 
  return (i ** e)
}

console.log(powerCalculator(10, -2))