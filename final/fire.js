var Mainclass = require('./Mainclass');
module.exports = class Fire extends Mainclass {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 4;
        
    }
    mul() {
		var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = 7;
			fireArr.push(new Fire(newX, newY, 7))
			this.energy = 2;
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
		
	}
	eat() {
		var grassCells = super.chooseCell(1);
		var newCell = grassCells[Math.floor(Math.random() * grassCells.length)]

        var grasseaterCells = super.chooseCell(2);
		var newCell2 = grasseaterCells[Math.floor(Math.random() * grasseaterCells.length)]

		if (newCell) {

			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			for (var i in grassArr) {
				if (grassArr[i].x == newX && grassArr[i].y == newY) {
					grassArr.splice(i, 1)
				}
			}

			this.x = newX;
			this.y = newY;
			this.energy++;

			if (this.energy >= 12) {
				this.mul();
			}

		}
		else {
			this.move();
        }
        
        // if (newCell2) {

		// 	var newX = newCell[0];
		// 	var newY = newCell[1];

		// 	matrix[newY][newX] = matrix[this.y][this.x];
		// 	matrix[this.y][this.x] = 0;

		// 	for (var i in grasseaterArr) {
		// 		if (grasseaterArr[i].x == newX && grasseaterArr[i].y == newY) {
		// 			grasseaterArr.splice(i, 1)
		// 		}
		// 	}

		// 	this.x = newX;
		// 	this.y = newY;
		// 	this.energy++;

		// 	if (this.energy >= 12) {
		// 		this.mul();
		// 	}

		// }
		// else {
		// 	this.move();
		// }
	}
}