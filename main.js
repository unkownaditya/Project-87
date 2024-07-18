var canvas= new fabric.Canvas("myCanvas");
block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
   
   fabric.Image.fromURL(get_image ,function(Img){
       block_image_object=Img;
       block_image_object.scaleToWidth(140);
       block_image_object.scaleToHeight(150);
     
         
     canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '82') 
   {
       
       block_x=100;
       block_y=50;
       console.log("r key is pressed");
       new_image("rr.jpg");
   }
   if(keyPressed == '71')
   {
       block_x = 200;
       block_y=150;
       console.log("g key is pressed");
       new_image("gr.png");
    
   }
   
   if(keyPressed == '89')
   {
       block_x =350;
       block_y=300;
       console.log("y key is pressed");
       new_image("yr.png");
      
   }
   if(keyPressed == '80')
   {
       block_x = 600;
       block_y=400;
       console.log("p key is pressed");
       new_image("pr.png");
       
   }
   if(keyPressed == '66')
   {
       block_x = 700;
       block_y= 650;
       console.log("b key is pressed");
       new_image("br.png");
  
   }
   
}

