var Mainclass = require('./Mainclass');
module.exports = class Person extends Mainclass {
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 5;
        this.speed = 100;
    }

    mul() {

        var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = 5
			personArr.push(new Person(newX, newY, 5))
			this.energy = 5;
           
        }
    }



    move() {
        var emptyCells = super.chooseCell(0);
		var newcell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
       
        if (newcell) {
            var newX = newcell[0];
            var newY = newcell[1];
            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
        }
            this.speed++;
            this.energy--;
            if (this.energy <=0) {
                this.die();
            }
    }
    // // PERSON IS MAKE A FACTORY
    // makefactory() {
    //     var factCell = Math.floor(Math.random * this.chooseCell(0).length);
    //     if (factCell) {
    //         var newF = new Factory(factCell[0], factCell[1], this.index);
    //         factoryArr.push(newF);
    //         matrix[factCell[1]][factCell[0]] = this.index;
    //         this.energy += 7;
    //     }

    // }
    die() {
       
            matrix[this.y][this.x] = 0;
            for (var i in personArr) {
                if (this.x == personArr[i].x && this.y == personArr[i].y) {
                    personArr.splice(i, 1);
                    
            }

        }


    }


}