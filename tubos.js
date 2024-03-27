function Horno (x, y, board, randomHeight, alturaParejaTubo) {
    let self = this
    this.x = x
    this.y = y
    this.width = 100
    this.height = randomHeight
    this.direction = -1
    // this.directionY = 0
    this.speed = 20 
    
    let tuboSuperior = document.createElement('div')
    this.insertHornoSup = function () {
        tuboSuperior.setAttribute('class', 'horno')
        tuboSuperior.style.top = this.y + 'px'
        tuboSuperior.style.left = this.x + 'px'
        tuboSuperior.style.height = this.height + 'px'
        board.appendChild(tuboSuperior)
    }
    
    let tuboInferior = document.createElement('div')
    this.insertHornoInf = function () {
        tuboInferior.setAttribute('class', 'horno')
        tuboInferior.style.top = ( self.height + 100) + 'px'
        tuboInferior.style.left = this.x + 'px'
        tuboInferior.style.height = alturaParejaTubo + 'px'
        board.appendChild(tuboInferior)
    }

    

    this.checkCollisionObject = function(){
       if (tuboSuperior.x < pollo.x + (pollo.width * 1.60) &&
       tuboSuperior.y < pollo.y + (pollo.height * 1.60) &&
       tuboSuperior.x + tuboSuperior.width > pollo.x &&
       tuboSuperior.y + tuboSuperior.height > pollo.y) {
       console.log("Auch!")
        clearInterval(timerId)
        clearInterval(timerId2)
        }
    }
    
    this.move = function(){
        horno.checkCollisionObject()
        let newCoordX = self.x + self.speed * self.direction;
        horno.checkCollisionObject()
        self.x = newCoordX;            
        tuboSuperior.style.left = self.x + 'px';
        tuboInferior.style.left = self.x + 'px';
    }
    this.timerId2 = setInterval(this.move, 100)
    
}