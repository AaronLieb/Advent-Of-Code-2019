let intCode = [
1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,5,19,23,2,9,23,27,1,27,5,31,2,31,13,35,1,35,9,
39,1,39,10,43,2,43,9,47,1,47,5,51,2,13,51,55,1,9,55,59,1,5,59,63,2,6,63,67,1,5,67,71,1,6,71,
75,2,9,75,79,1,79,13,83,1,83,13,87,1,87,5,91,1,6,91,95,2,95,13,99,2,13,99,103,1,5,103,107,1,
107,10,111,1,111,13,115,1,10,115,119,1,9,119,123,2,6,123,127,1,5,127,131,2,6,131,135,1,135,2,
139,1,139,9,0,99,2,14,0,0
];

/*
Find the input noun and verb that cause the program to produce the output 19690720.
What is 100 * noun + verb? (For example, if noun=12 and verb=2, the answer would be 1202.)
*/

function parse(ic) {
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
  let percent = 0;
  let p = 0;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      ict = intCode.slice();
      ict[1] = i;
      ict[2] = j;
      p = ++percent / 100
      console.log(p + "% done")
      let parsed = parse(ict)[0]
      if (parsed == 19690720) {
        console.log("i: ", i);
        console.log("j: ", j);
        console.log((i * 100) + j)
        return;
      }
    }
  }
}

test(intCode)
