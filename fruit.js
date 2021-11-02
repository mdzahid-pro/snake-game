function Fruit(){
    this.x
    this.y

    this.pickLocation = function(){
        this.x = (Math.floor(Math.random() * rows -1) +1) * scale
        this.y = (Math.floor(Math.random() * column -1) +1) * scale
    }

    this.draw = function(){
        ctx.fillStyle = "#ff5722"
        ctx.fillRect(this.x,this.y,scale,scale)
    }
}