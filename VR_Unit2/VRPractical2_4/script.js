let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [ ], ufos = [ ], rocketTemplate;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  rocketTemplate = document.querySelector("#rocketTemplate");

  for(let x = -10; x < 10; x += 2){
    for(let z = -10; z < 10; z += 2){
      let r = new Rocket(x, 1, z);
      rockets.push(r);
    }
  }

  for(let i = 0; i < 20; i++){
    let ufo = new Ufo(rnd(-20,20),10,rnd(-20,20));
    ufos.push(ufo);
  }

  loop();
});

function loop(){
  for(let r of rockets){
    r.launch();
  }
  for(let ufo of ufos){
    ufo.spin();
    ufo.fall();
  }

  window.requestAnimationFrame( loop );
}