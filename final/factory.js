var Mainclass = require('./Mainclass');
module.exports = class Factory extends Mainclass{

    constructor(x, y, index) {
       super(x, y, index);
        this.energy = 9;
    }

    mul() {

        var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            var newperson = new Person(newCell[0], newCell[1], this.index);
            personArr.push(newperson);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 9;
        }
    }



    move() {

        var newcell = Math.floor(Math.random * this.chooseCell(0).length);
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

        var newcell1 = Math.floor(Math.random * this.chooseCell(1).length);
        var newcell2 = Math.floor(Math.random * this.chooseCell(2).length);
        var newcell3 = Math.floor(Math.random * this.chooseCell(3).length);
        var newcell4 = Math.floor(Math.random * this.chooseCell(4).length);
        var newcell5 = Math.floor(Math.random * this.chooseCell(5).length);

        if (newcell1) {

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