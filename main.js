let board = document.getElementById('board');
let pollo = new Pollo(200, 400, board)
//let horno = new Horno(800, 700, board)
let randomHeight = (Math.floor(Math.random()* 501) + 120)
let alturaParejaTubo = (800 - randomHeight) - 100;
let horno = new Horno(701, 0, board, randomHeight, alturaParejaTubo)
let hornosArray = []
var timerId2;

function startGame () {
    pollo.insertPollo();
    horno.insertHornoSup();
    horno.insertHornoInf();
    timerId2 = setInterval(loop, 2000)
    
}


function loop (){
    horno.move()
    crearTubos()
    timerId2 = setInterval(horno.move, 100)
    timerIdTubos = setInterval(crearTubos, 5000)   
}
var timerId;

function crearTubos(){
    //let randomCoordx = Math.floor(Math.random()* 10 * 50)
    let randomCoordx = 701
    let randomHeight = (Math.floor(Math.random()* 501) + 120)
    let alturaParejaTubo = (800 - randomHeight) - 100;
 

    let horno = new Horno(randomCoordx, 0, board, randomHeight, alturaParejaTubo)
    horno.insertHornoSup();
    horno.insertHornoInf();
    hornosArray.push(horno)
    console.log(hornosArray)

    /* 
    var horno = new Horno(randomCoordy, 600, board, hornosArray)
    horno.insertHorno()
    hornosArray.push(horno)
    console.log(hornosArray) 
    */
} 

window.addEventListener("keydown", function(e) {
    switch(e.key){
        case "w":
            startGame ()
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

/*window.addEventListener("keydown", function(e) {
    switch(e.key){
        case "Escape":
            clearInterval(timerId)
            clearInterval(timerId2)
            clearInterval(timerIdTubos)
            break
    }
})*/

