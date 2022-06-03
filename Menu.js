var x=630
var y=164
var img;
var img2;
var img5;
var nome=""
var erro;
var win;

function preload() {
  img = loadImage('imagens/untitled.png');
  img2 = loadImage('imagens/logo1.png');
  img3 = loadImage('imagens/Game On.png');
  img4 = loadImage('imagens/instrucoes.png');
  img5 = loadImage('imagens/nome.png');
  img6 = loadImage('imagens/Play (5).png');
  nome1 = loadImage('imagens/play1.png');
  pergunta1 = loadImage('imagens/pergunta1.png');
  pergunta2 = loadImage('imagens/nivel2.png');
  pergunta3 = loadImage('imagens/pergunta3.png');
  pergunta4 = loadImage('imagens/nivel4.png');
  erro = loadImage('imagens/erro.png');
  win = loadImage('imagens/loading.png')
}

function menu(){background(img);
  circle(541, 99, 90)
  image(img2, 490, 45, 100, 100)
  image(img5, 540, 0, 400, 200)
  
  fill("#000000");
  rect(x, y, 160, 50, 140, 30, 20);
  fill("#FFFFFF")
  rect(640, 168, 140, 30, 20)
  rect(640, 218, 140, 30, 20)
  rect(640, 268, 140, 30, 20)
  rect(640, 318, 140, 30, 20)
  fill("#000000")
 
 textAlign(CENTER,CENTER)   
 noStroke()
 textSize(25)
 fill("#000000")               
 text("Play", 710, 185)
 text("Instrutions", 710, 235)
 text("Credits", 710, 285)
 text("Rankin", 710, 335)
 textSize(10)
 text("DEVELOPED BY ABNER'S COMPANY", 720, 570)
 fill("#FFFFFF")
 
 if(mouseX>=0 && mouseX<=1365 &&mouseY>=168 && mouseY<=198){
     y=164
   }
 if(mouseX>=0 && mouseX<=1365 &&mouseY>=218 && mouseY<=248){
     y=214
   }
 if(mouseX>=0 && mouseX<=1365 &&mouseY>=268 && mouseY<=298){
     y=264
   }
 if(mouseX>=0 && mouseX<=1365 &&mouseY>=318 && mouseY<=348){
     y=314
   }

}

function keyPressed(){
  if(key=="ArrowUp" && y>168)
    y=y-50
  
  if(key=="ArrowDown" && y<300)
    y=y+50 
  
  if(key=="Enter" && tela==0){
   if(y==164){
     tela=4
   }
   if(y==214){
     tela=1
   }
   if(y==264){ 
     tela=2
   }
  }
  if(key=="Escape"){
    tela=0;
  }
  if(tela==4){
    if(key=="Enter" && nome!==""){
      tela=3;
    }
    if(event.which==32){
      nome=nome+" "
    }
    if(event.key=="Backspace") {
    nome=nome.substring(0, nome.length-1);
    }else {
         if(event.which>=65 && event.which<=90 || event.which==186){
           nome=nome+event.key;
         }
    }
  }
  if(tela>=3 && tela<=9){
    if(key=="ArrowDown"&& b<477){
      b=b+83
    }
    if(key=="ArrowUp" && b>394){
      b=b-83
    }
    if(key=="ArrowRight" && a<750){
      a=a+400
    }
    if(key=="ArrowLeft" && a>350){
      a=a-400
    }
    if(key=="Enter"){
      
      if(tela==3 && a==350 && b==477){
        tela=5;
      }
      
      if(tela==5 && a==750 && b==394){
        tela=6;
      }
      
      if(tela==6 && a==750 && b==477){
        tela=7;
      }
      
      if(tela==7 && a==350 && b==394){
        tela=9;
      }
      
      
    }
  }
}