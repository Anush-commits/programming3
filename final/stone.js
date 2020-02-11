var Mainclass = require('./Mainclass');
module.exports = class Stone extends Mainclass {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 7;
        this.directions = [
            
        ]
    }
}