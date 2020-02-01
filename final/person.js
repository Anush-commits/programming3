var Mainclass = require('./Mainclass');
module.exports = class Person extends Mainclass {
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 5;
        this.speed = 100;
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
       return super.chooseCell(character);
    }
    mul() {

        var newCell = random(this.chooseCell(0));
        console.log(newCell, this.energy);
        if (this.energy >= 15 && newCell) {
            var newperson = new Person(newCell[0], newCell[1], this.index);
            personArr.push(newperson);
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
            this.speed++;
            this.energy--;

        }

    }
    // PERSON IS MAKE A FACTORY
    makefactory() {
        var factCell = random(this.chooseCell(0));
        if (factCell) {
            var newF = new Factory(factCell[0], factCell[1], this.index);
            factoryArr.push(newF);
            matrix[factCell[1]][factCell[0]] = this.index;
            this.energy += 7;
        }

    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in personArr) {
                if (this.x == personArr[i].x && this.y == personArr[i].y) {
                    personArr.splice(i, 1);
                    break;
                }
            }

        }


    }


}