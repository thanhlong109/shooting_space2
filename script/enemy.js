class Enemy{
    constructor(src,src_hurt,timeChangeDirection,setTimeChangeDirection,src_bullet){
        this.width = 50;
        this.height = 50;
        this.x  = Math.random()*450;
        this.y = -(Math.random()*500);
        this.src_hurt = src_hurt;
        this.src = src;
        this.src2 = src;
        this.yDirection;
        this.xDirection;
        this.timeChangeDirection = timeChangeDirection;
        this.setTimeChangeDirection = setTimeChangeDirection;
        this.life = (Math.floor(Math.random()*5))+1;
        this.time_hurt = 0;
        this.set_time_hurt = 200;
        this.src_bullet = src_bullet;
        this.arrs_bullet = [];
        this.indexBullet = 0;
        this.count_time_fire = 0;
        this.player;
        this.set_time_fire = (Math.floor(Math.random()*5000))+2000;
        this.isExplosion = false;
        this.createExplosionObj();
        this.x2 = -100;
        this.y2 = 100;
    }
    draw(x,y){
        var enemyObj = new Image();
        enemyObj.onload=function(){
            ctx.drawImage(enemyObj,x,y,50,50);
        };
       enemyObj.src= this.src;
    }
    move(player){
        this.explosionAni();
        this.explosion.set(this.x2,this.y2);
        this.player = player;
        if(this.arrs_bullet.length<8){
            this.createBullet();
        }
        this.count_time_fire+=20;
        this.bulletMove(player);
        if(this.count_time_fire >= this.set_time_fire){
            this.fired();
            this.count_time_fire = 0;
        }
        this.animateHurt()
        this.timeChangeDirection+=20;
        if(this.timeChangeDirection>=this.setTimeChangeDirection){
            this.getDirection();
            this.timeChangeDirection=0;
        }
        if(this.y<0){
            this.yDirection = '+';
        }else if(this.y>=450){
            this.yDirection = '-';
        }
        if(this.x<0){
            this.xDirection ="+";
        }else if(this.x>450){
            this.xDirection = "-";
        }
        switch(this.yDirection){
            case '+':
                this.y++;
                break;
            case '-':
                this.y--;
                break;
        }
        switch(this.xDirection){
            case '+':
                this.x++;
                break;
            case '-':
                this.x--;
                break;
        }
        this.draw(this.x,this.y);
        
    }
    getDirection(){
        let ranx = Math.random()*2;
        if(ranx>1){
            this.xDirection = "+";
        }else{
            this.xDirection = "-";
        }
        let rany = Math.random()*2;
        if(rany>1){
            this.yDirection = "+";
        }else{
            this.yDirection = "-";
        }
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
        this.life--;
        this.src = this.src_hurt;
        if(this.life<=0){
            this.player.point++;
            this.isExplosion = true;
            this.explosionAni();
            this.respawn();
            this.life = (Math.floor(Math.random()*5))+1
        }
    }
    bulletMove(player){
        for(let i=0;i<this.arrs_bullet.length;i++){
            let bullet = this.arrs_bullet[i];
            bullet.move(player);
        }
    }
    respawn(){
        this.x = Math.random()*450;
        this.y = -(Math.random()*1000);
    }
    fired(){
        let bullet = this.arrs_bullet[this.indexBullet];
        bullet.set(this.x,this.y);
        if(this.indexBullet>=9){
            this.indexBullet=0;
        }
        this.indexBullet++;
    }
    createBullet(){
        console.log("create")
        for(var i=0;i<10;i++){
            this.arrs_bullet[i] = new EnemyBullet(this.src_bullet,4);
        }
    }
    explosionAni(){
        if(this.isExplosion){
            this.explosion.new();
            this.x2=this.x;
            this.y2=this.y;
            this.isExplosion = false;
        }
        this.explosion.set(this.x2,this.y2);

    }
    createExplosionObj(){
        this.explosion = new Explosion();
    }

}