let min = 356262
let max = 846303
let succCount = 0;

function matchPassword(pass) {
  let flag = false;
  for (let j = 0; j < pass.length - 1; j++) {
    if (pass[j] === pass[j+1]) flag = true;
    if (pass[j] > pass[j+1]) return false;
  }
  return flag
}

for (let i = min; i < max; i++) {
  if (matchPassword(i+"")) succCount++;
}

console.log(succCount)
