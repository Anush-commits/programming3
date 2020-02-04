var socket = io();
side = 10;
function setup() {
   
    createCanvas(500, 500);
}

function nkarel(matrix) {
    console.log(matrix);
    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                
            }
            else if (matrix[y][x] == 0) {
                fill("silver");
          

            }
            else if (matrix[y][x] == 2) {
                fill("yellow");


            }
            else if (matrix[y][x] == 3) {
                fill("red");
             
                


            }
            else if (matrix[y][x] == 4) {
                fill("blue");
             
            }
            else if (matrix[y][x] == 5) {
                fill("turquoise");
    


            }
            else if (matrix[y][x] == 6) {
                fill("black");
       
            }
            rect(x * side, y * side, side, side);
        }

    }

}


    socket.on('send matrix', nkarel)
