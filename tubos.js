function Horno (x, y, board, randomHeight, alturaParejaTubo, hornosArray) {
    let self = this
    this.x = x
    this.y = y
    this.width = 100
    this.height = randomHeight
    this.spriteSup
    this.spriteInf
    this.direction = -1

    // this.directionY = 0
    this.speed = 4 
    
    let tuboSuperior = document.createElement('div')
    this.insertHornoSup = function () {
        tuboSuperior.setAttribute('class', 'horno')
        tuboSuperior.style.top = this.y + 'px'
        tuboSuperior.style.left = this.x + 'px'
        tuboSuperior.style.height = this.height + 'px'
        this.spriteSup = tuboSuperior
        board.appendChild(this.spriteSup)
    }
    
    let tuboInferior = document.createElement('div')
    this.insertHornoInf = function () {
        tuboInferior.setAttribute('class', 'horno')
        tuboInferior.style.top = ( self.height + 100) + 'px'
        tuboInferior.style.left = this.x + 'px'
        tuboInferior.style.height = alturaParejaTubo + 'px'
        this.spriteInf = tuboInferior
        board.appendChild(this.spriteInf)
    }

    this.checkCollisionObject = function(posicionTubo){
        console.log(this.x)
        console.log(pollo.x + pollo.width)
        if (hornosArray[posicionTubo].x < (pollo.x + pollo.width)){
            console.log("Auch!"); 
              clearInterval(timerIdTubos)
            clearInterval(timerId3);
            console.log(hornosArray[posicionTubo])
            hornosArray[posicionTubo].spritSup.remove()
            hornosArray.shift()

            hornosArray[posicionTubo].spriteInf.remove()
            hornosArray.shift()
          
           
        }
      /*  if (self.x < pollo.x + (pollo.width * 1.60) &&
       self.y < pollo.y + (pollo.height * 1.60) &&
       self.x + self.width > pollo.x &&
       self.y + self.height > pollo.y) {
       console.log("Auch!")
       clearInterval(timerId)
       clearInterval(timerId2)
        } */

    }
    
    this.move = function(){
       // hornosArray.forEach(horno =>{
        if (self.x <= 0){

            self.spriteSup.remove()
            hornosArray.shift()

            self.spriteInf.remove()
            hornosArray.shift()
        } else {
            for (let i = 0; i < hornosArray.length; i++){
                hornosArray[i].checkCollisionObject(i)
            }
//            horno.checkCollisionObject()
        let newCoordX = self.x + self.speed * self.direction;
        self.x = newCoordX;            
        tuboSuperior.style.left = self.x + 'px';
        tuboInferior.style.left = self.x + 'px'; 
        }
      //}) 
        
/* 
        console.log(hornosArray)
        console.log(self.x)
      */
    }
    timerId3 = setInterval(this.move, 50)
    
}