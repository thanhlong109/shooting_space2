class EnemyBullet{
    constructor(src,speed){
        this.speed = speed;
        this.src = src;
        this.width = 8;
        this.height = 24;
        this.x = -100;
        this.y = -100;
    }
    draw(x,y){
        var bullet= new Image();
        bullet.onload=function(){
            ctx.drawImage(bullet,x,y,8,24);
        };
        bullet.src= this.src;
    }
    set(x,y){
        this.x=x;
        this.y=y;
    }
    isCollision(player) {
        let distX = (this.x + (this.width/2)) - (player.x + (player.width)/2);
        if (distX < 0)
            distX = -distX;

        const distW = (this.width + player.width)/2;

        let distY =(this.y + (this.height/2)) - (player.y + (player.height)/2);
        if(distY < 0)
            distY = -distY;

        const distH = (this.height + player.height)/2;

        return (distX <= distW && distY <= distH);
    }
   
    move(player){
        if(this.isInScreen()){
            this.y +=this.speed;
            if(this.y>600||this.isCollision(player)){
                this.delete(player);
            }
            this.draw(this.x,this.y);
        }
    }
    isInScreen(){
        return (this.x >0 && this.x<450)&&(this.y>0&& this.y<550)
    }
    delete(player){
        this.x = -1000;
        this.y = -10000;
        player.hurt();
    }
}