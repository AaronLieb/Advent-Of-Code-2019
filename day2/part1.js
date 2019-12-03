// https://adventofcode.com/2019/day/1

let input = [];

/*
What value is left at position 0 after the program halts?
*/

function run(ic) {
  for (let i = 0; i < ic.length; i+=4) {
    let op = ic[i];
    if (op == 99) return ic;
    else if (op == 1) {
      ic[ic[i+3]] = ic[ic[i+1]] + ic[ic[i+2]];
    } else if (op == 2) {
      ic[ic[i+3]] = ic[ic[i+1]] * ic[ic[i+2]];
    } else {
      console.log("error: ", op);
      return ic;
    }
  }
  return ic[0];
}

console.log(run(input))
