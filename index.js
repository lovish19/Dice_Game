var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage= "dice" + randomNumber1 + ".png"; // concatenation to create that image (  dice1.png - dice6.png   )
var randomImageSource= "/images/images/" + randomDiceImage; //this will generate source    
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2= "/images/images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if (randomNumber1 >  randomNumber2) {
    document.querySelector("h1").innerHTML=" 🚩 Player 1 Wins!";
}
else if(randomNumber1 <  randomNumber2){
    document.querySelector("h1").innerHTML=" 🚩 Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML=" 🏳️ It's A Draw!";
}
