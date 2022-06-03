function mouseClicked() {
  if(tela==0 && mouseX>=645 && mouseX<=775 && mouseY>=168 && mouseY<=198){
    tela=4;
  }
  if(tela==0 && mouseX>=645 && mouseX<=775 && mouseY>=218 && mouseY<=248){
    tela=1;
  }
  if(tela==0 && mouseX>=645 && mouseX<=775 && mouseY>=268 && mouseY<=298){
    tela=2;
  }
  if(tela==1 && mouseX>=5 && mouseX<=85 && mouseY>=22 && mouseY<=52){
    tela=0
  }
  if(tela==2 && mouseX>=5 && mouseX<=85 && mouseY>=22 && mouseY<=52){
    tela=0
  }
  if(tela==4 && mouseX>=5 && mouseX<=85 && mouseY>=22 && mouseY<=52){
    tela=0
  }
  if(tela>=3 && mouseX>=5 && mouseX<=85 && mouseY>=22 && mouseY<=52){
    tela=0
  }
  if(tela==4 && mouseX>=1150 && mouseX<=1350 && mouseY>=510 && mouseY<=560){
    tela=3
  }
  
}