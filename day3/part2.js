let input1 = []
let input2 = []

function inBetween(a,b,c) {
  return ((a >= b && b >= c) || (c >= b && b >=a));
}

function getDirection(move) {
  let mag = parseInt(move.slice(1));
  let dirMap = {"U":{x:0,y:mag},"D":{x:0,y:(-1*mag)},"R":{x:mag,y:0},"L":{x:(-1*mag),y:0}}
  return dir = dirMap[move[0]]
}


function toCartesian(input) {
  let points = [{x: 0, y: 0, pathLen:0}];
  for (move of input) {
    let prev = points[points.length - 1];
    let d = getDirection(move)
    let point = {x: prev.x + d.x, y: prev.y + d.y, pathLen: prev.pathLen + Math.abs(dir.x + dir.y)};
    points.push(point)
  }
  return points;
}

function findIntersections(input, points) { // im sorry for this mess
  let next,prev = {x:0,y:0,pathLen:0}
  let minDistance = 0;
  for (move of input) {
    let dir = getDirection(move)
    console.log(move);
    next = {x: (prev.x + dir.x),y: (prev.y + dir.y),pathLen:(prev.pathLen + Math.abs(dir.x + dir.y))};
    let seg1 = {a: prev, b: next};
    seg1.v = (dir.x == 0);
    for (let i=0; i < points.length - 1; i++) { // Compare every line segment and see if they intersect
      let prev2 = points[i];
      let next2 = points[i+1]
      let seg2 = {a: prev2, b: next2};
      seg2.v = (prev2.y != next2.y);
      if (seg1.v != seg2.v) {
        let vert = (seg1.v) ? seg1 : seg2
        let horz = (seg2.v) ? seg1 : seg2
        if (inBetween(vert.a.y,horz.a.y,vert.b.y) && inBetween(horz.a.x,vert.a.x,horz.b.x)) { // intersect forumla
          let dvert = Math.abs(vert.a.y - horz.a.y);
          let dhorz = Math.abs(horz.a.x - vert.a.x);
          let vertP = vert.a.pathLen + dvert;
          let horzP = horz.a.pathLen + dhorz;
          let dis = vertP + horzP
          console.log("distance: " + dis, " v: " + vertP + " h: " + horzP)
          if ((dis != 0) && ((dis < minDistance) || (minDistance == 0))) {
            minDistance = dis;
          };
        }
      }
    }
    prev = next;
  }
  return minDistance;
}

console.log("Minimum Distance Intersection: " + findIntersections(input2, toCartesian(input1)))
