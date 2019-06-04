// Rover Object Goes Here
var mars = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

function turnLeft(rover){
  rover.direction === "N" ? rover.direction = "W" :
  rover.direction === "W" ? rover.direction = "S" :
  rover.direction === "S" ? rover.direction = "E" :
  rover.direction = "N"

  console.log(`Turned left and is now facing: ${rover.direction}`);
}

function turnRight(rover){
  rover.direction === "N" ? rover.direction = "E" :
  rover.direction === "W" ? rover.direction = "N" :
  rover.direction === "S" ? rover.direction = "W" :
  rover.direction = "S"

  console.log(`Turned right and is now facing: ${rover.direction}`);
}

function moveForward(rover){
  console.log("moveForward was called")
  // With boundaries
  if (rover.direction === "N" && rover.y > 0) {
    rover.y -= 1
  }
  else if (rover.direction === "E" && rover.x <= 9) {
    rover.x += 1
  }
  else if (rover.direction === "S" && rover.y <= 9) {
    rover.y += 1
  }
  else if (rover.direction === "W" && rover.x > 0) {
    rover.x -=1;
  }
  console.log(`Moved to coordinates: [${rover.x},${rover.y}]`);
}


function movements(list, rover) {
  for (var i = 0; i < list.length; i++) {
    // console.log(list.charAt(i));
    if (list.charAt(i) === "l") {
      turnLeft(rover);
    }
    else if (list.charAt(i) === "r") {
      turnRight(rover);
    }
    else if (list.charAt(i) === "f") {
      rover.travelLog.push(`X: ${rover.x}, Y: ${rover.y}`)
      moveForward(rover);
    }
    else {
      // Input validation
      console.log(`${list.charAt(i)} is not a valid input.`)
      continue;
    }
  }
  console.log(rover.travelLog);
}

movements("rffrfflfrff", mars);
