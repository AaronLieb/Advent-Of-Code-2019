// https://adventofcode.com/2019/day/2

let input = [];

/*
Find the input noun and verb that cause the program to produce the output 19690720.
What is 100 * noun + verb? (For example, if noun=12 and verb=2, the answer would be 1202.)
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
  return ic;
}

function test(ic) {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      ict = input.slice();
      ict[1] = i;
      ict[2] = j;
      let result = run(ict)[0]
      if (result == 19690720) {
        return (noun * 100) + verb;
      }
    }
  }
}

console.log(test(input))
