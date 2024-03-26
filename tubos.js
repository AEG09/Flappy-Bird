function Horno (x, y, board) {
    let self = this
    this.x = x
    this.y = y
    this.width = 100
    this.height = 100
    this.direction = -1
    // this.directionY = 0
    this.speed = 10
    this.sprite = document.createElement('div')
     
    this.insertHorno = function () {
        this.sprite.setAttribute('id', 'horno')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        board.appendChild(this.sprite)
    }
    this.checkCollision = function(){
       if  (self.x < pollo.x + (pollo.width * 1.25) &&
            self.y < pollo.y + (pollo.height * 1.25) &&
            self.x + self.width > pollo.x &&
            self.y + self.height > pollo.y) {
        clearInterval(timerId)
        }
    }
    this.move = function(){
        let newCoordY = self.x + self.speed * self.direction;
        horno.checkCollision()

        self.y= newCoordY;            
        self.sprite.style.top = self.y + 'px';


        /* if(newCoordX <= 650 || newCoordX >= 0){
            self.x = newCoordX;            
            self.sprite.style.top = self.x + 'px';
       };
       if(newCoordX >= 750) {
        clearInterval(timerId2)
       }  */
    }
}