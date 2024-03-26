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
        tuboInferior.style.top = ( 800 - alturaParejaTubo ) + 'px'
        tuboInferior.style.left = this.x + 'px'
        tuboInferior.style.height = alturaParejaTubo + 'px'
        board.appendChild(tuboInferior)
    }

    

    this.checkCollisionObject = function(){
       if (self.x < pollo.x + (pollo.width * 1.60) &&
       self.y < pollo.y + (pollo.height * 1.60) &&
       self.x + self.width > pollo.x &&
       self.y + self.height > pollo.y) {
   
                console.log("Auch!")
        clearInterval(timerId)
        clearInterval(timerId2)
        }
    }
    
    this.move = function(){
        horno.checkCollisionObject()
        let newCoordX = self.x + self.speed * self.direction;
        if (newCoordX <= 700 && newCoordX >= 0){
            self.x = newCoordX
            self.sprite.style.right = self.x + "px"
        }
        
    }


}