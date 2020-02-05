var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);


grassArr = [];
grasseaterArr = [];
monsterArr = [];
waterArr = [];
personArr = [];
factoryArr = [];
matrix = [];
var a = 50;



Grass = require('./grass');
Grasseater = require('./grasseater');
Person = require('./person');
Factory = require('./factory');
Water = require('./water');
Monster = require('./monster');


function rand(min, max) {
    return Math.random() * (max - min) + min;
}

for (let i = 0; i < a; i++) {
    matrix[i] = [];
    for (let j = 0; j < a; j++) {
        matrix[i][j] = Math.floor(rand(0, 6))

    }
}
io.sockets.emit("send matrix", matrix)





function createObject(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = 1 
                grassArr.push(new Grass(x, y, 1))
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = 2
                grasseaterArr.push(new Grasseater(x, y, 2))
            }
            else if (matrix[y][x] == 3) {
                matrix[y][x] = 3
                monsterArr.push(new Monster(x, y, 3));
            }

            else if (matrix[y][x] == 4) {
                matrix[y][x] = 4
                var wat = new Water(x, y, 4);
                waterArr.push(wat);
            }
            else if (matrix[y][x] == 5) {
                matrix[y][x] = 5
                var per = new Person(x, y, 5);
                personArr.push(per);

            }
            else if (matrix[y][x] == 6) {
                matrix[y][x] = 6
                var fact = new Factory(x, y, 6);
                factoryArr.push(fact);
            }

        }
    }
    io.sockets.emit("send matrix", matrix);
}

function game() {

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grasseaterArr) {
        grasseaterArr[i].move();
        grasseaterArr[i].eat();
        grasseaterArr[i].mul();
        grasseaterArr[i].die();
    }

    for (var i in monsterArr) {
        monsterArr[i].mul();
        monsterArr[i].move();
        monsterArr[i].eat();
        monsterArr[i].die();

    }
    for (var i in waterArr) {
        waterArr[i].mul();
        waterArr[i].move();
        waterArr[i].eat();
        waterArr[i].die();

    }

    for (var i in personArr) {
        personArr[i].mul();
        personArr[i].move();
        personArr[i].makefactory();
        personArr[i].die();

    }
    for (var i in factoryArr) {
        factoryArr[i].mul();
        factoryArr[i].move();
        factoryArr[i].eat();
        factoryArr[i].die();

    }
    io.sockets.emit("send matrix", matrix);


}

setInterval(game, 1000);


function kill() {
    grassArr = [];
    grassEaterArr = []
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function aply() {
    for (let i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6;
            let newFactory = new Factory(x, y, 6);
            factoryArr.push(newFactory);
        }
    }
    io.sockets.emit("send matrix", matrix);
}
const setup = require('./script');
console.log(setup.setup());

function sayHi() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] == 5) {
                
            }

        }
    }
}

io.on('connection', function (socket) {
    createObject();
    socket.on("kill", kill);
    socket.on("aply grass", aply);
    socket.on("say hi", sayHi);
});

var statistics = {};

setInterval(function() {
    statistics.grass = grassArr.length;
    statistics.Grasseater = grasseaterArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function () {
        console.log("send");
    });
}, 1000);