let board = document.getElementById('board');
let pollo = new Pollo(200, 400, board)
/* let randomHeight = (Math.floor(Math.random()* 501) + 120)
let alturaParejaTubo = (800 - randomHeight) - 100; */
let hornosArray = []
// let horno = new Horno(701, 0, board, randomHeight, alturaParejaTubo, hornosArray)
var timerId2;
var timerId;



function startGame () {
    pollo.insertPollo();
    loop()
}


function loop (){
    timerIdTubos = setInterval(crearTubos, 2000) 
//    timerId2 = setInterval(horno.move, 3000)
}



function crearTubos(){
    //let randomCoordx = Math.floor(Math.random()* 10 * 50)
    let randomCoordx = 701
    let randomHeight = (Math.floor(Math.random()* 501) + 120)
    let alturaParejaTubo = (800 - randomHeight) - 100;
    let horno = new Horno(randomCoordx, 0, board, randomHeight, alturaParejaTubo, hornosArray)
    horno.insertHornoSup();
    horno.insertHornoInf();
    hornosArray.push(horno)
    // console.log(hornosArray)

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
            
//            this.clearInterval(timerId)
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

window.addEventListener("keydown", function(e) {
    switch(e.key){
        case "Escape":
            clearInterval(timerId)
            clearInterval(timerId2)
            clearInterval(timerIdTubos)
            break
    }
})

startGame ()

