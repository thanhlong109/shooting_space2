class Explosion{
    constructor(){
        this.src = 'img/explosion.png';
        this.count_time = 0;
        this.set_time = 200;
        this.sX = 0;
        this.sY = 0;
        this.sWidth = 140;
        this.sHeight = 140;
        this.frame = 0;
        this.isNew = false;
    }
    set(x,y){
        this.count_time+=20;
        if(this.count_time>=this.set_time){
            this.nextFrame();

            this.frame++;
            this.count_time = 0;
        }
        this.draw(this.sX,this.sY,this.sWidth,this.sHeight,x,y);
        if(this.isNew){
            document.getElementById('explosion_sound').play();
            this.isNew=false;
        }
    }
    nextFrame(){
        this.sX+=140;
    }
    draw(sX,sY,sWidth,sHeight,x,y){
        var explosionObj = new Image();
        explosionObj.onload=function(){
            ctx.drawImage(explosionObj,sX,sY,sWidth,sHeight,x,y,50,50);
        }
        explosionObj.src = this.src;
    }
    new(){
        this.isNew = true;
        this.sX = 0;
    }
}
