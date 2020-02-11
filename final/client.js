
var socket = io();
var side = 20

function setup() {
    createCanvas(22 * side, 42 * side/2);
    background("#acacac");
}
var weath 
socket.on("weather", function (data) {
  weath = data;
 
})


function nkarel(matrix) {


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];
            if (matrix[y][x] == 1) {
                fill("green");
             if(weath == "summer") {
                fill("#e77586");
                
             }
            }
            else if (matrix[y][x] == 0) {
                fill("gray");
            }
            else if (matrix[y][x] == 2) {
                fill("#fed8b1")
               if (weath == "autumn") {
                   fill("C46210")
               }
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("#d2dae2");
                 if (weath == "autumn") {
                    fill("lightblue");
                    ellipse(x * side/2, y * side, side/2, side *2);
              
            }
        
        }
            else if (matrix[y][x] == 5) {
                fill("#ecbcb4");

            }
            else if (matrix[y][x] == 6) {
                fill("black");
               
            }
            else if (matrix[y][x] == 7) {
                fill("orange"); 
               
            }
            rect(x * side, y * side, side, side);
        }

    }


}


socket.on("send matrix", nkarel);
function kill() {
    socket.emit("kill")
}
function aply() {
    socket.emit("aply factory")
}

function addgrass () {
    socket.emit("add grass")
}
function fire() {
    socket.emit("make fire")
}