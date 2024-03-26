function Horno (x, y, board) {
    let self = this
    this.x = x
    this.y = y
    this.width = 100
    this.height = 100
    this.direction = -1
    // this.directionY = 0
    this.speed = 20 
    
    this.sprite = document.createElement('div')
     
    this.insertHorno = function () {
        this.sprite.setAttribute('id', 'horno')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        board.appendChild(this.sprite)
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
        let newCoordX = self.x + self.speed * self.direction;
        horno.checkCollisionObject()
        

        self.x = newCoordX;            
        self.sprite.style.left = self.x + 'px';
    }
}