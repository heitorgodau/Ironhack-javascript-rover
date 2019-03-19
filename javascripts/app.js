// Rover Object Goes Here
// ======================
let rover = {
  direction: "N"
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "W"
      return rover.direction;
    case "W":
      rover.direction = "S"
      return rover.direction;
    case "S":
      rover.direction = "E"
      return rover.direction;
    case "E":
      rover.direction = "N"
      return rover.direction;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "E"
      return rover.direction;
    case "E":
      rover.direction = "S"
      return rover.direction;
    case "S":
      rover.direction = "W"
      return rover.direction;
    case "W":
      rover.direction = "N"
      return rover.direction;
  }
}

function moveForward(rover){
  console.log("moveForward was called")
}
