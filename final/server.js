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

matrix = [];
var a = 50;

for (let y = 0; y < a; y++) {
    matrix[y] = [];
    for (let x = 0; x < a; x++) {
        matrix[y][x] = Math.floor(Math.random() * 6);
    }
}
console.log(matrix);

io.sockets.emit("send matrix", matrix);


 grassArr = [];
 grasseaterArr = [];
 monsterArr = [];
 waterArr = [];
 personArr = [];
 factoryArr = [];

Grass = require('./grass');
Grasseater = require('./grasseater');
Person = require('./person');
Factory = require('./factory');
Water = require('./water');
Monster = require('./monster');

function createObject(matrix) {
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var eater = new Grasseater(x, y, 2);
                grasseaterArr.push(eater);
            }
            else if (matrix[y][x] == 3) {
                var mon = new Monster(x, y, 3);
                monsterArr.push(mon);
            }

            else if (matrix[y][x] == 4) {
                var wat = new Water(x, y, 4);
                waterArr.push(wat);
            }
            else if (matrix[y][x] == 5) {
                var per = new Person (x, y, 5);
                personArr.push(per);

            }
            else if (matrix[y][x] == 6) {
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

io.on('connection', function () {
    createObject(matrix);
})