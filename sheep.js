const howManySheep = function(sheep){
    if (sheep === 0) {
      return console.log(0 + ": All the sheep are over the fence");
    }
  console.log(sheep + ": Another sheep has jumped over the fence");
  howManySheep(sheep -1)
}

let mySheep = 3;
console.log(howManySheep(mySheep))