var randomNumber1=Math.floor(Math.random()*6+1);

var randomImage="images/dice"+randomNumber1+".png";

var image1= document.querySelectorAll("img")[0].setAttribute("src",randomImage);


var randomNumber2=Math.floor(Math.random()*6+1);

var randomImage1="images/dice"+randomNumber2+".png";

var image2= document.querySelectorAll("img")[1].setAttribute("src",randomImage1);

var randomNumber3=Math.floor(Math.random()*6+1);

var randomImage2="images/dice"+randomNumber3+".png";

 document.querySelectorAll("img")[2].setAttribute("src",randomImage2);

//document.querySelectorAll("img")[3].setAttribute("src","images/dice"+Math.floor(Math.random()*6+1)+".png");


 if(randomNumber1>randomNumber2&&randomNumber1>randomNumber3)
{
	document.querySelector("h1").innerHTML="Player 1 Wins!";
}

else if(randomNumber2>randomNumber1&&randomNumber2>randomNumber3)
{
		document.querySelector("h1").innerHTML="Player 2 Wins!";
}

else if(randomNumber3>randomNumber2&&randomNumber3>randomNumber1)
{
   document.querySelector("h1").innerHTML="Player 3 Wins!";
}

else if(randomNumber1==randomNumber2&&randomNumber1>randomNumber3)
{
		document.querySelector("h1").innerHTML="Players 1 and 2 Wins!";
}

else if(randomNumber1==randomNumber3&&randomNumber3>randomNumber2)
{
		document.querySelector("h1").innerHTML="Players 1 and 3  Wins!";
}

else if(randomNumber2==randomNumber3&&randomNumber2>randomNumber1)
{
		document.querySelector("h1").innerHTML="Players 2 and 3 Wins!";
}

else{
		document.querySelector("h1").innerHTML="draw!";
}