 //http://www.colabeduc.org/descricao/show/736

//video;;;;https://drive.google.com/file/d/1SJ9B244Yprs8y_0Wavb38a5MDv_PmhcK/view?usp=sharing
var tela=0
function setup() {
  createCanvas(1366, 583);
}
function draw(){
  
  if(tela==0){
    menu()
  }
  if(tela==1){
    instrucoes()
  }
  if(tela==2){
    creditos()
  }
  if(tela==4){
    game()
  }
  if(tela==3){
    nivel1()
  }
  if(tela==5){
    nivel2()
  }
  if(tela==6){
    nivel3()
  }
  if(tela==7){
    nivel4()
  }
  if(tela==8){
    nivel5()
  }
  if(tela==9){
    nivel6()
  }
}   