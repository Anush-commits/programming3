var Mainclass = require('./Mainclass');
module.exports = class Monster extends Mainclass {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 7;
    }

    mul() {

        var emptyCells = super.chooseCell(0);
		var newcell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newcell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3
            var newmonster = new Monster(newX, newY, 3);
            monsterArr.push(newmonster);
            this.energy = 7;

        }
    }

    move() {
        var emptyCells = super.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
    
            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;
    
            this.x = newX;
            this.y = newY
        }
    
        this.energy--;
        if (this.energy <= 0) {
            this.die();
        }
    
    
    }
    eat() {
      
        var grassCells = super.chooseCell(1);
        var newcell = grassCells[Math.floor(Math.random() * grassCells.length)]
        var grasseateCells = super.chooseCell(2);
        var newCell2 = grasseateCells[Math.floor(Math.random() * grasseateCells.length)]

        if (newCell2) {

            var newX = newCell2[0];
            var newY = newCell2[1];
            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;
           


            for (var i in grasseaterArr) {
                if (newX == grasseaterArr[i].x && newY == grasseaterArr[i].y) {
                    grasseaterArr.splice(i, 1);
                    break;
                }
            }


            this.x = newX;
            this.y = newY;
            this.energy += 3;

        }
        else if (newcell) {
            var newX = newcell[0];
            var newY = newcell[1];
            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;


            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    
                }
            }


            this.x = newX;
            this.y = newY;
            this.energy += 3;
            if (this.energy >= 12) {
                this.mul();
            }

        }
        else{
            this.move();
        }

    }

   
mul() {
    var emptyCells = super.chooseCell(0);
    var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

    if (newCell) {
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 2
        grasseaterArr.push(new Grasseater(newX, newY, 2))
        this.energy = 6;
    }
}

die() {
    matrix[this.y][this.x] = 0;
    for (var i in grasseaterArr) {
        if (grasseaterArr[i].x == this.x && grasseaterArr[i].y == this.y) {
            grasseaterArr.splice(i, 1)
        }
    }

}

}