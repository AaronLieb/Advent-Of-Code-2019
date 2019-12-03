// https://adventofcode.com/2019/day/1

let total = 0;

function fuel(mass) {
  let result = Math.floor((mass/3)) - 2;
  if (result > 0) {
    total += result
    fuel(result);
  }
}

for (mass of masses) {
  fuel(mass)
}

console.log(total)
