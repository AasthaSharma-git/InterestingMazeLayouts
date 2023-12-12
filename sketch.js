var maze1;



function preload(){
  
 
}

function setup() {

  
  createCanvas(800,800);
   // Create walls group
  maze1 = new Group();

  

  // Create sprites based on the maze layout
  for (let row = 0; row < mazeLayout1.length; row++) {
    for (let col = 0; col < mazeLayout1[row].length; col++) {
      if (mazeLayout1[row][col] === "W") {
        let wall = createSprite(col * 40 + 20, row * 40 + 20, 40, 40);
        wall.shapeColor = '#FA8072'
        maze1.add(wall);
      }
    }
  }
}

function draw() {
  background('#B22222'); 
  drawSprites();
 
}



