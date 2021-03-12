function rollDice()
{
  var pla1 = (Math.random() * 6) + 1;
  pla1 = Math.floor(pla1);
  var imgsrc = "images/dice" + pla1 + ".png";
  document.querySelector(".res1").setAttribute("src",imgsrc);

  var pla2 = (Math.random() * 6) + 1;
  pla2 = Math.floor(pla2);
  var imgsrc2 = "images/dice" + pla2 + ".png";
  document.querySelector(".res2").setAttribute("src",imgsrc2);

  if(pla1 > pla2)
  {
    document.getElementById("pla1").style.backgroundColor = "green";
    document.getElementById("pla2").style.backgroundColor = "white";
    var p = parseInt(document.querySelector(".points1").innerHTML) ;
    p = p+1;
    document.querySelector(".points1").innerHTML = p;
  }

  else if(pla2 > pla1)
  {
    document.getElementById("pla2").style.backgroundColor = "green";
    document.getElementById("pla1").style.backgroundColor = "white";
    var q = parseInt(document.querySelector(".points2").innerHTML) ;
    q = q+1;
    document.querySelector(".points2").innerHTML = q;
  }

  else{
    document.getElementById("pla1").style.backgroundColor = "white";
    document.getElementById("pla2").style.backgroundColor = "white";
  }

  if(p == 10){
    document.querySelector(".winner").innerHTML = "Player 1 WON !!!";
    alert("player 1 won");

    document.querySelector(".points1").innerHTML = "0";
    document.querySelector(".points2").innerHTML = "0";
   

  }

  else if( q == 10){
    document.querySelector(".winner").innerHTML = "Player 2 WON !!!";
    alert("player 2 won");
    document.querySelector(".points2").innerHTML = "0";
    document.querySelector(".points1").innerHTML = "0";
  }

  if(p==1 || q==1)
  {
    document.querySelector(".winner").innerHTML = "";
  }

}