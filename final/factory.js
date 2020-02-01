var Mainclass = require('./Mainclass');
module.exports = class Factory extends Mainclass{

    constructor(x, y, index) {
       super(x, y, index);
        this.energy = 9;
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
        console.log(newCell, this.multiply);
        if (this.energy >= 15 && newCell) {
            var newperson = new Person(newCell[0], newCell[1], this.index);
            personArr.push(newperson);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 9;
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
        var newcell2 = random(this.chooseCell(2));
        var newcell3 = random(this.chooseCell(3));
        var newcell4 = random(this.chooseCell(4));
        var newcell5 = random(this.chooseCell(5));

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
            this.energy += 7;

        }
        else if (newcell2) {

            var newx = newcell2[0];
            var newy = newcell2[1];
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
            this.energy += 7;

        }
        else if (newcell3) {

            var newx = newcell3[0];
            var newy = newcell3[1];
            matrix[this.y][this.x] = 0;
            matrix[newy][newx] = this.index;

            for (var i in monsterArr) {
                if (newx == monsterArr[i].x && newy == monsterArr[i].y) {
                    monsterArr.splice(i, 1);
                    break;
                }
            }


            this.x = newx;
            this.y = newy;
            this.energy += 7;

        }
        else if (newcell4) {

            var newx = newcell4[0];
            var newy = newcell4[1];
            matrix[this.y][this.x] = 0;
            matrix[newy][newx] = this.index;

            for (var i in waterArr) {
                if (newx == waterArr[i].x && newy == waterArr[i].y) {
                    waterArr.splice(i, 1);
                    break;
                }
            }


            this.x = newx;
            this.y = newy;
            this.energy += 7;

        }
        else if (newcell5) {

            var newx = newcell5[0];
            var newy = newcell5[1];
            matrix[this.y][this.x] = 0;
            matrix[newy][newx] = this.index;

            for (var i in personArr) {
                if (newx == personArr[i].x && newy == personArr[i].y) {
                    personArr.splice(i, 1);
                    break;
                }
            }


            this.x = newx;
            this.y = newy;
            this.energy += 7;

        }

    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in factoryArr) {
                if (this.x == factoryArr[i].x && this.y == factoryArr[i].y) {
                    factoryArr.splice(i, 1);
                    break;
                }
            }

        }


    }
}