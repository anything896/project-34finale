//Create variables here
var dog,happyDog;
var database,foodS;
var foodStock;
function preload()
{
  dog1 = loadImage("images/dogimg.png");
  doghappy = loadImage("images/dogimg1.png");
}

function setup() {
	createCanvas(500,500);
 dog=createSprite(250,250,15,15)
 dog.image = loadImage(dog1)
}


function draw() {  
  background(46,139,87)
foodStock=database
foodStock.on("value"/readstock)
if (KeyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImages(doghappy)
}
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

