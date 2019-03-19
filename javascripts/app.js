// Rover Object Goes Here
// ======================


let rover = {
  direction: "N",
  positionX: 0,
  positionY: 0
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
  switch(rover.direction){
    case "N":
      rover.positionY -= 1;
      return rover.positionX + ", " + rover.positionY; 
    case "E":
      rover.positionX += 1;
      return rover.positionX + ", " + rover.positionY;
    case "S":
      rover.positionY += 1;
      return rover.positionX + ", " + rover.positionY;
    case "W":
      rover.positionX -= 1;
      return rover.positionX + ", " + rover.positionY;
  }
}
