function Pollo (x, y, board) {
    let self = this
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.direction = 0
    // this.directionY = 0
    this.speed = 10
    this.sprite = document.createElement('div') /*el sprite será la imagen que se utilizará en el juego. 
    Ahora se usara el div porque no tenemos imagen y pondremos una caja.*/

    /* aquí abajo vamos a usar un método para meter al jugador en el tablero*/
    this.insertPollo = function () {
        this.sprite.setAttribute('id', 'pollo')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        board.appendChild(this.sprite)
    }

    this.move = function(){
        let newCoordY = self.y + self.speed * self.direction;

        if(newCoordY <= 800 || newCoordY >= 0){
            self.y = newCoordY;            
            self.sprite.style.top = self.y + 'px';
       };
       if(newCoordY >= 750) {
        clearInterval(timerId)
       } 
    }
}
