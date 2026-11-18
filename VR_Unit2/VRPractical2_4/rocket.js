class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.z = z;

    this.y = y;
    this.dy = rnd(1,10) / 50 
    
    this.obj = document.createElement("a-cone");
    this.obj.setAttribute("radius-bottom", 0.009); 
        this.obj.setAttribute("radius-top", 0.05);
         
        this.obj.setAttribute("height", 0.25);        
        this.obj.setAttribute("color", "red");     
        this.obj.setAttribute("opacity", 0.9);
    
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);  
    
  }
  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}