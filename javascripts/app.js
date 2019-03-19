// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  positionX: 0,
  positionY: 0,
  travelLog: []
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
  
  console.log(rover.travelLog)
}

function command (string){
  let commands = string;
  for(let i = 0; i < commands.length; i++){
    switch (commands[i]) {
      case "f":
        moveForward(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      default:
        console.log("Use 'f' to move Foward, 'l' to turn left or 'r' to turn right. Only this letters")
    }
  }
  rover.travelLog.push(rover.positionX,rover.positionY);
  //console.log("position: " + rover.positionX + ", " + rover.positionY);
  console.log(rover.travelLog)
}
