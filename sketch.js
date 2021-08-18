var spacecraft, sc1, sc2, sc3, sc4
var bg 
var iss, issImg

var hasDocked = false





function preload(){

sc1=loadImage("spacecraft1.png")
sc2=loadImage("spacecraft2png")
sc3=loadImage("spacecraft3.png")
sc4=loadImage("spacecraft4.png")
bg=loadImage("spacebg.jpg")

issImg=loadImage("iss.png")

}



function setup() {
  createCanvas(800,400);
  spacecraft=createSprite(280, 240, 50, 50);

  spacecraft.addImage(sc1)
  spacecraft.scale=0.2

  iss=createSprite(300, 150, 50, 50);

  iss.addImage(issImg)

  iss.scale=0.2


}

function draw() {
  background(bg);  

  if(!hasDocked){
    spacecraft.x= spacecraft.x+random(-1,1)
    
    if(keyDown("LEFT_ARROW"){
    spacecraft.x= -1
           }
           if(keyDown("LEFT_ARROW"){
            spacecraft.x= -1
                   }
                   if(keyDown("UP_ARROW"){
                    spacecraft.y= -1
                           }

    if(keyDown("DOWN_ARROW"){
    spacecraft.addImage(sc2)
                                   }


  }


if(spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10)){

  hasDocked=true
  Text("DOCKING SUCCESFUL",200,300)



}



  drawSprites();
}