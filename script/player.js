class Player{
    constructor(src,src_hurt){
        this.x = 225;
        this.y = 550;
        this.src = src;
        this.src2 = src;
        this.width = 50;
        this.height = 50;
        this.life = 3;
        this.src_hurt = src_hurt;
        this.time_hurt = 0;
        this.set_time_hurt = 200;
        this.point = 0;
        this.isDie = false;
    }
    draw(x,y){
        this.x = x;
        this.y = y;
        var player= new Image();
        player.onload=function(){
            ctx.drawImage(player,x,y,50,50);
        };
        player.src= this.src;
    }
    move(){
        this.animateHurt()
        if(this.time_hurt >= this.set_time_hurt){
            this.src = this.src2;
            this.time_hurt = 0;
        }
        this.draw(this.x,this.y);
    }
    animateHurt(){
        if(this.src === this.src_hurt){
            this.time_hurt+=20;
            if(this.time_hurt>=this.set_time_hurt){
                this.src = this.src2;
                this.time_hurt = 0;
            }
        }
    }
    hurt(){
        document.getElementById('hurt_sound').play();
        this.life --;
        this.src = this.src_hurt;
        if(this.life<=0){
            this.isDie = true;
        }
    }
}