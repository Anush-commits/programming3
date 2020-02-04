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

        var newcell = Math.floor(Math.random * this.chooseCell(0).length);
        if (this.energy >= 8 && newcell) {
            var newmonster = new Monster(newcell[0], newcell[1], this.index);
            monsterArr.push(newmonster);
            matrix[newcell[1]][newcell[0]] = this.index;
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
                    break;
                }
            }


            this.x = newX;
            this.y = newY;
            this.energy += 3;

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