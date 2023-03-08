var randomNum1=Math.floor(Math.random()*6)+1;
var img1="images/dice"+randomNum1+".png";
var randomNum2=Math.floor(Math.random()*6)+1;
var img2="images/dice"+randomNum2+".png";

document.querySelectorAll("img")[0].setAttribute("src", img1);
document.querySelectorAll("img")[1].setAttribute("src", img2);

if(img1>img2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(img2>img1)
{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else
    document.querySelector("h1").innerHTML="Draw";