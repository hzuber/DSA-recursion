const SplitIt = (str, sym) => {
  let result = [];
  let newString = str;
  
  const iterateIt = (str, sym) => {
    
    for (i=0; i < str.length; i++){
      let length = str.length;
      
      if (str[i] === sym){
        newString = str.slice(i+1);
        return str.slice(0, i);
      }
      
      if (i === length -1){
        newString = '';
        return str
      }
    }
  }
  
  for (i = 0; i < newString.length; i++){
    result.push(iterateIt(newString, sym))
  }
  
  return result
}

let string = "20/44/8888"
console.log(SplitIt(string, "/"))