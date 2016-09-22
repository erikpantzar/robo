let robotComponent = {
    template: `
 <robot-position
    position="$ctrl.position"
    direction="$ctrl.direction"></robot-position>

 <robot-controller
    on-move="$ctrl.move(action)"></robot-controller>
`,
    controller: function() {
        const ctrl = this;
        ctrl.dir = ['N', 'E', 'S', 'W'];
        ctrl.direction = this.direction;
        ctrl.position = this.position;
        console.log(this);

        ctrl.forward = (direction='N') => {
            switch(direction) {
              case 'N':
              ctrl.position.y++
              break;
              case 'E':
              ctrl.position.x++
              break;
              case 'S':
              ctrl.position.y--
              break;
              default:
              ctrl.position.x--
            }
        };

        ctrl.changeDirection = (input) => {
            let bool = true;
            if (input === 'V' || input === 'L') {
              bool = false;
            }  // else input === 'H' || input === 'R'

            if(bool) {
              ctrl.dir.push(this.dir.shift());
            } else {
              ctrl.dir.unshift(this.dir[3]);
              ctrl.dir.pop();
            }
            return ctrl.dir[0];
        };

        ctrl.move = (action) => {
            console.log('move is called: ', action);

            if (action === 'G' || action === 'F') {
                ctrl.forward(ctrl.direction);
            } else {
                ctrl.direction = ctrl.changeDirection(action);
            }
        };

    }, // end of controller
    bindings: {
        position: '<',
        direction: '<'
    }
};

let robotPosComponent = {
    template: `<h2><span ng-bind="$ctrl.position.x"></span> <span ng-bind="$ctrl.position.y"></span> <span ng-bind="$ctrl.direction"></span></h2> `,
    bindings: { position: '=', direction: '=' }
};

let robotControlComponent = {
    template: `
  <button ng-click="$ctrl.move('L')">L</button>
  <button ng-click="$ctrl.move('F')">F</button>
  <button ng-click="$ctrl.move('R')">R</button>
`,
    controller: function() {
        this.move = (action)=> {
            this.onMove({ action: action });
        }
    },
    bindings: {
        onMove: '&'
    }
};

angular.module('robot', [])
    .component('robot', robotComponent)
    .component('robotPosition', robotPosComponent)
    .component('robotController', robotControlComponent)
;
