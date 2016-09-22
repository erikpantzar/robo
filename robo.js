// 5x5 room
// point
// getStartPos
// contains / currentPos
// L R F
// unit test

class Robot {
  constructor(x, y, direction='N') {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.dir = ['N', 'E', 'S', 'W'];
  }

  action(move="VHG") {
    move = move.split('');
    move.forEach((m)=> {
      if (m === 'G' || m === 'F') {
        this.forward(this.direction);
      } else {
        this.direction = this.changeDirection(m, this);
      }
    })
  }

  position() {
      return `${this.x} ${this.y} ${this.direction}`;
  }

  changeDirection(input='R') {
    let bool = true;
    if (input === 'V' || input === 'L') {
      bool = false;
    }

    if(bool) {
      this.dir.push(this.dir.shift());
    } else {
      this.dir.unshift(this.dir[3]);
      this.dir.pop();
    }
    return this.dir[0];
  }

  forward(direction='N') {
    switch(direction) {
      case 'N':
      this.y--
      break;
      case 'E':
      this.x++
      break;
      case 'S':
      this.y++
      break;
      default:
      this.x--
    }
  }
}



let cj = new Robot(1,2);
cj.action('HGHGGHGHG');
console.log(cj.position());
