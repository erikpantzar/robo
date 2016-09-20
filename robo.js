// 5x5 room
// point
// getStartPos
// contains / currentPos
// L R F
// unit test


const dir = ['N', 'E', 'S', 'W'];
const l = dir.length;

function changeDirection(input='R', robot=walle) {
  let direction = robot.getPosition().direction, bool = true;
  if (input === 'V' || input === 'L') {
    bool = false;
  }  // else input === 'H' || input === 'R'

  if(bool) {
    // array to one right
    dir.push(dir.shift());
  } else {
    dir.unshift(dir[3]);
    dir.pop();
  }
  
  console.log(input, robot, dir[0]);
  return dir[0];
}

class Robot {
  constructor(x, y, direction='N') {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  getPosition() {
    return {
      point: { x: this.x, y: this.y },
      direction: this.direction
    }
  }

  action(move="VHG") {
    move = move.split('');
    move.forEach((m)=> {
      if (m === 'G' || m === 'F') {
        this.forward(this.direction);
      } else {
        this.direction = changeDirection(m, this);
      }
    })
    
  }

  forward(direction='N') {
    switch(direction) {
      case 'N':
      this.y++
      break;
      case 'E':
      this.x++
      break;
      case 'S':
      this.y--
      break;
      default:
      this.x--
    }

    console.log(this);
  }
}


let walle = new Robot(1,2);
//console.log(walle.getPosition());
walle.action('RLG');
