var Mainclass = require('./Mainclass');
module.exports = class Water extends Mainclass {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 5;
    }
 

    mul() {
        var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = 4
            var newwat = new Water(newX, newY, 4);
            waterArr.push(newwat);
            this.energy = 6;



        }
    }


    move() {
        var emptyCells = super.chooseCell(0);
		var newCell1 = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell1) {

            var newx = newCell1[0];
            var newy = newCell1[1];
            matrix[newy][newx] =  matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;

            this.x = newx;
            this.y = newy;
        }
            this.energy--;
if (this.energy <= 0) {
    this.die();
}

        }

    eat() {
        var grassCells = super.chooseCell(3);
		var newcell = grassCells[Math.floor(Math.random() * grassCells.length)]

        if (newcell) {

            var newx = newcell[0];
            var newy = newcell[1];
            matrix[newy][newx] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;

            for (var i in monsterArr) {
                if (newx == monsterArr[i].x && newy == monsterArr[i].y) {
                    monsterArr.splice(i, 1);
                
                }
            }


            this.x = newx;
            this.y = newy;
            this.energy += 3;

            if (this.energy >= 12) {
                this.mul();
            }

        }
        else {
			this.move();
		}
    }

    die() {
        
            matrix[this.y][this.x] = 0;
            for (var i in waterArr) {
                if (this.x == waterArr[i].x && this.y == waterArr[i].y) {
                    waterArr.splice(i, 1);
                    
                
            }

        }


    }
}