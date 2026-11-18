class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let walls = document.createElement("a-box");
        walls.setAttribute("color", "cream");
        walls.setAttribute("position", "0 1 0"); 
        walls.setAttribute("width", "2");
        walls.setAttribute("height", "2");
        walls.setAttribute("depth", "2");
        this.obj.append(walls);

    
    let roof = document.createElement("a-cone");
        roof.setAttribute("color", "darkred");
        roof.setAttribute("position", "0 2.5 0"); 
        roof.setAttribute("radius-bottom", "1.5");
        roof.setAttribute("height", "1");
        this.obj.append(roof);

    let door = document.createElement("a-box");
        door.setAttribute("color", "brown");
        door.setAttribute("position", "0 0.6 1.01"); 
        door.setAttribute("height", "1.2");
        door.setAttribute("depth", "0.05");
        this.obj.append(door);


    this.obj.setAttribute("position", `${x} ${y} ${z}`);
        scene.append(this.obj);

  }
}