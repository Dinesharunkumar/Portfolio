var aboutUs = {
    "Hobbies": "<ul><li>Cycling</li><li>Watching series</li><li>Swimming</li></ul>",
    "Personal_Skills": "<ul><li>Communiation Skill</li><li>Leadership</li><li>Good Teamplayer</li><li>Punctuality</li></ul>",
    "Extra_Curricular_Activity": "<ul><li>Volly ball player</li><li>Nss Volunteer</li></ul>"
  };
  
var unseletectedColor = "#ccff99";
var seletectedColor = "black";
var unseletedbg="black";
var seletectedbg="#ccff99"
var exe;
var about= document.getElementsByClassName("scs");
for(var a=0;a<about.length;a++){
  about[a].onclick= function(){
    exe = this.innerHTML;
    document.getElementById("box-text").innerHTML= aboutUs[exe];
    for(var b=0;b<about.length;b++){
      about[b].style.backgroundColor=unseletedbg;
      about[b].style.color=unseletectedColor;
      about[b].style.fontWeight="normal";

    }


    this.style.backgroundColor = seletectedbg;
    this.style.color = seletectedColor;
    
    this.style.fontWeight="bold";

}
}
document.getElementById("am").onclick=function(){
    window.scrollTo(0, 400);

};
document.getElementById("ts").onclick=function(){
    window.scrollTo(0,600);

};
document.getElementById("ct").onclick=function(){
    window.scrollTo(0, 1200);

};
var i=1;
$("#menu").click(function(){
  if(i){
    $("#am").hide();
    $("#ts").hide();
    $("#ct").hide();
    i=0;
  }
  else{
    $("#am").show();
    $("#ts").show();
    $("#ct").show();
    i=1;

  }
  

});

