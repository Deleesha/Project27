class Rope {

    constructor(mybodyA , mybodyB , offsetX ,offsetY,pointC) {

        var options = {
            bodyA : mybodyA,
            bodyB : mybodyB,
            pointC :{x : this.offsetX, y: this.offsetY},
            stiffness :1,
            length:200
        }
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);


    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(4);
        line(pointA.x, pointA.y,pointB.x, pointB.y);

       
    }

}