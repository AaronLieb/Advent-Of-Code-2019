let input1 = ["R75","D30","R83","U83","L12","D49","R71","U7","L72"]
let input2 = ["U62","R66","U55","R34","D71","R55","D58","R83"]
let corners1 = [[0,0]]
let corners2 = [[0,0]]
let intersections = [];

function findCorners(input, corners) {
  for (move of input) {
    let last = corners[corners.length - 1]
    let x,y = 0;
    if (move[0] == "U") y = 1;
    else if (move[0] == "D") y = -1;
    else if (move[0] == "R") x = 1;
    else x = -1;
    x,y *= move.slice(1);
    let corner = [(last[0] + x), (last[1] + y)];
    corners.push(corner)
  }
}

findCorners(input1, corners1);
findCorners(input2, corners2);
console.log(corners1);
