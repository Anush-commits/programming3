var Mainclass = require('./Mainclass');
module.exports = class Monster extends Mainclass {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 7;
    }
    getNewCoordinates(){
        this.directions = [

            [this.x - 1, this.y - 2],
            [this.x, this.y - 1],
            [this.x + 1, this.y],
            [this.x + 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x + 4, this.y + 1],
            [this.x + 4, this.y + 1],
            [this.x + 3, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 1, this.y],
            [this.x, this.y + 1],
            [this.x - 1, this.y + 2]


        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
      return  super.chooseCell(character);
    }
    mul() {

        var newcell = random(this.chooseCell(0));
        if (this.energy >= 8 && newcell) {
            var newmonster = new Monster(newcell[0], newcell[1], this.index);
            monsterArr.push(newmonster);
            matrix[newcell[1]][newcell[0]] = this.index;
            this.energy = 7;

        }
    }

    move() {

        var newCell1 = random(this.chooseCell(0));
        if (newCell1) {
            var newx = newCell1[0];
            var newy = newCell1[1];
            matrix[this.y][this.x] = 0;
            matrix[newy][newx] = this.index;

            this.x = newx;
            this.y = newy;
            this.energy--;


        }

    }
    eat() {

        var newcell = random(this.chooseCell(2));
        var newcell2 = random(this.chooseCell(1));

        if (newcell) {

            var newx = newcell[0];
            var newy = newcell[1];
            matrix[this.y][this.x] = 0;
            matrix[newy][newx] = this.index;


            for (var i in grasseaterArr) {
                if (newx == grasseaterArr[i].x && newy == grasseaterArr[i].y) {
                    grasseaterArr.splice(i, 1);
                    break;
                }
            }


            this.x = newx;
            this.y = newy;
            this.energy += 3;

        }
        else if (newcell2) {
            var newx = newcell2[0];
            var newy = newcell2[1];
            matrix[this.y][this.x] = 0;
            matrix[newy][newx] = this.index;


            for (var i in grassArr) {
                if (newx == grassArr[i].x && newy == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }


            this.x = newx;
            this.y = newy;
            this.energy += 3;

        }

    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in monsterArr) {
                if (this.x == monsterArr[i].x && this.y == monsterArr[i].y) {
                    monsterArr.splice(i, 1);
                    break;
                }
            }

        }

    }

}