let min = 356262
let max = 846303
let succCount = 0;

function matchPassword(pass) {
  let flag = false;
  let map = {};
  for (let j = 0; j < pass.length - 1; j++) {
    if (pass[j] === pass[j+1]) {
      if (!map[pass[j]]) map[pass[j]] = 1;
      else map[pass[j]]++;
    }
    if (pass[j] > pass[j+1]) return false;
  }
  Object.keys(map).forEach( k => {if (map[k] == 1) flag = true;});
  return flag
}

for (let i = min; i < max; i++) {
  if (matchPassword(i+"")) succCount++;
}

console.log(succCount)
