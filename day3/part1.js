let input1 = ["R75","D30","R83","U83","L12","D49","R71","U7","L72"]
let input2 = ["U62","R66","U55","R34","D71","R55","D58","R83"]
let corners1 = [{x:0,y:0}]
let minD = 0;


/*   a
     |
     |
-----+-----
c    |    d
     |
     b
*/
/*
if (ay > cy > by && dx > ax > cx) {
  intersection.push([ax,dy])
}
*/

/*
-a-----c----d------b
-a-----c----b------d
*/
/*
if (ay > cy > by && dx > ax > cx) {
  intersection.push([ax,dy])
}
*/

/*

replace the first abcd with just ab
and the second abcd with just cd

add support for horizontal and vertical lines

*/



function getDir(move) {
  let x = 0;
  let y = 0;
  if (move[0] == "U") y = 1;
  else if (move[0] == "D") y = -1;
  else if (move[0] == "R") x = 1;
  else x = -1;
  x *= parseInt(move.slice(1));
  y *= parseInt(move.slice(1));
  return {x: x,y: y}
}


function findCorners(input, corners) {
  for (move of input) {
    let prev = corners[corners.length - 1]
    let d = getDir(move)
    let corner = {x: prev.x + d.x, y: prev.y + d.y};
    corners.push(corner)
  }
}

function traverse(input) {
  let prev = {x:0,y:0}
  let next = {x:0,y:0}
  let a = {x:0,y:0}; let b = {x:0,y:0}; let c = {x:0,y:0}; let d = {x:0,y:0};
  for (move of input) {
    let horz = false;
    let vert = false;
    console.log(move)
    let dir = getDir(move)
    next = {x: (prev.x + dir.x),y: (prev.y + dir.y)};
    if (dir.x != 0) { // horizontal
      d = (dir.x > 0) ? next : prev;
      c = (dir.x > 0) ? prev : next;
      horz = true;
    } else { // vertical
      b = (dir.y > 0) ? prev : next;
      a = (dir.y > 0) ? next : next;
      vert = true;
    }
    console.log("NEXT")
    for (let i=0; i < corners1.length - 1; i++) {
      let prev2 = corners1[i];
      let next2 = corners1[i+1]
      if (prev2.y != next2.y) { // horizontal
        d = (next2.x > prev2.x) ? next2 : prev2;
        c = (next2.x > prev2.x) ? prev2 : next2;
      } else { // vertical
        b = (next2.y > prev2.y) ? prev2 : next2;
        a = (next2.y > prev2.y) ? next2 : prev2;
      }
      let one = (a.y > c.y);
      let two = (c.y > b.y);
      let three = (d.x > a.x);
      let four = (a.x > c.x);
      console.log("-----")
      console.log(a.x, a.y);
      console.log(b.x, b.y);
      console.log(c.x, c.y);
      console.log(d.x, d.y);

      //console.log(one + " " + two + " " + three + " " + four)
      if (one && two && three && four) {
        console.log("INTERSECT!");
        let dis = Math.abs(a.x) + Math.abs(d.y)
        if ((dis != 0) && ((dis < minD) || (minD == 0))) {
          minD = dis;
        };
      }
    }
    prev = next;
  }
}


findCorners(input1, corners1);
//console.log(corners1)
traverse(input2)
console.log(minD)
