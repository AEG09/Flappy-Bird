let board = document.getElementById('board');
let pollo = new Pollo(200, 400, board)
let horno = new Horno(800, 600, board)
let tubo = []
var timerId2;

function startGame () {
    pollo.insertPollo();
    horno.insertHorno();

    timerId2 = setInterval(horno.move, 100)

    
    
}
var timerId;

window.addEventListener("keydown", function(e) {
    switch(e.key){
        case "w":
            this.clearInterval(timerId)
            pollo.direction = -1
            pollo.move()
            break
    }
})

window.addEventListener("keyup", function(e) {
    switch(e.key){
        case "w":
            pollo.direction = 1
            timerId = setInterval(pollo.move, 100)
            break
    }
})

startGame();