// https://adventofcode.com/2019/day/1

function fuel(mass) {
  let result = Math.floor((mass/3)) - 2;
}

let total = 0;
for (mass of masses) {
  total += fuel(mass)
}
console.log(total)
