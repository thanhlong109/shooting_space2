class PlayerBullet{
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
    isCollision(enemy) {
        let distX = (this.x + (this.width/2)) - (enemy.x + (enemy.width)/2);
        if (distX < 0)
            distX = -distX;

        const distW = (this.width + enemy.width)/2;

        let distY =(this.y + (this.height/2)) - (enemy.y + (enemy.height)/2);
        if(distY < 0)
            distY = -distY;

        const distH = (this.height + enemy.height)/2;

        return (distX <= distW && distY <= distH);
    }
    checkCollision(arrs_enemy){
        for(let i=0;i<arrs_enemy.length;i++){
            if(this.isCollision(arrs_enemy[i])){
                let enemy = arrs_enemy[i];
                enemy.hurt();
                return true;
            }
        }
        return false;
    }
    move(arrs_enemy){
        this.y -=this.speed;
        if(this.y<0||this.checkCollision(arrs_enemy)){
            this.delete();
        }
        this.draw(this.x,this.y);
    }
    delete(){
        this.x = -100;
        this.y = 10000;
    }
    
}