var Mainclass = require('./Mainclass');
module.exports = class Grasseater extends Mainclass{
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 5;


    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
      return  super.chooseCell(character);
    }
    mul() {

        var newCell = random(this.chooseCell(0));
        if (this.energy >= 12 && newCell) {
            var newGrasseater = new Grasseater(newCell[0], newCell[1], this.index);
            grasseaterArr.push(newGrasseater);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 5;

        }
    }



    move() {

        var newcell = random(this.chooseCell(0));
        if (newcell) {

            var newX = newcell[0];
            var newY = newcell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            this.x = newX;
            this.y = newY;
            this.energy--;
        }

    }




    eat() {

        var newcell = random(this.chooseCell(1));
        if (newcell) {

            var newx = newcell[0];
            var newy = newcell[1];
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
            this.energy += 4;

        }


    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in grasseaterArr) {
                if (this.x == grasseaterArr[i].x && this.y == grasseaterArr[i].y) {
                    grasseaterArr.splice(i, 1);
                    break;
                }
            }

        }


    }


}
