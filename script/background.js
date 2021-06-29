let background_y1 = 0;
let background_y2 = -600;
let speed_background = 2;
class Planet{
    constructor(src){
        this.speed = speed_background;
        this.src = src;
        this.x = Math.random()*350;
        this.y = -((Math.random()*10000)+200);
        this.scaleX  = Math.random()*250;
        this.scaleY = this.scaleX;
    }
    draw(x,y,scaleX,scaleY){
        var planet= new Image();
        planet.onload=function(){
            ctx.drawImage(planet,x,y,scaleX,scaleY);
        };
        planet.src= this.src;
    }
    setNew(){
        this.x = (Math.random()*350);
        this.y = -((Math.random()*10000)+200);
        this.scaleX  = Math.random()*250;
        this.scaleY = this.scaleX;
    }
    move(){
        this.y += this.speed;
        if(this.y > canvas_height + 100){
            this.setNew();
        }
        this.draw(this.x,this.y,this.scaleX,this.scaleY);
    }
    
}
function backgroundDraw(y){
    var backgroundObj= new Image();
        backgroundObj.onload=function(){
        ctx.drawImage(backgroundObj,-50,y,500,610);
    };
    backgroundObj.src='img/background.png';
}

function backgroundMove(){
    background_y1+=speed_background;
    background_y2+=speed_background;
    if(background_y1>=600){
        background_y1=-600;
    }
    if(background_y2>=600){
        background_y2 = -600;
    }
    backgroundDraw(background_y1);
    backgroundDraw(background_y2);
}
