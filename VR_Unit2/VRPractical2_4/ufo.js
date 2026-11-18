class Ufo {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.04;
        this.a = 0;
        this.da = 1;
        this.obj = document.createElement("a-torus");
        this.obj.setAttribute("radius-bottom", 0.5); 
        this.obj.setAttribute("radius-top", 0.05);   
        this.obj.setAttribute("height", 0.25);        
        this.obj.setAttribute("color", "silver");     
        this.obj.setAttribute("opacity", 0.99);
        this.obj.setAttribute("position", {x: x, y: y, z: z});
        scene.append(this.obj);
    }


  spin(){
    this.a += this.da;
    this.obj.setAttribute("rotation",{x:this.a, y:this.a, z:this.a});
    console.log(this.a)
  }

  fall(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    if(this.y < 0){
      this.y = rnd(10,20);
    }
  }
}