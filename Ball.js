class Ball {

    constructor(x,y){

        var ball_options = {
            restitution : 0.5 , density : 1.5 
        }

        this.body = Bodies.circle(x,y,50, ball_options);
        this.radius = 50;
        this.x = x;
        this.y = y;
        World.add(world,this.body);

    }

    

    display(){

        var position = this.body.position;
        var angle = this.body.angle;
        //elipseMode(RADIUS);
        push();
        translate(position.x,position.y);
        rotate(angle);
        fill("purple"); 
        circle(0, 0,this.radius);
        pop();
    }



}