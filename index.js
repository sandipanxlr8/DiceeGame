var num1 =  Math.floor(Math.random() * 6 + 1);
var imagesrc1 = "images/dice"+ num1 +".png";
document.querySelector(".img1").setAttribute("src" ,imagesrc1);

var num2 =  Math.floor(Math.random() * 6 + 1);
var imagesrc2 = "images/dice" + num2 +".png";
document.querySelector(".img2").setAttribute("src" , imagesrc2);

if(num1==num2){
    document.querySelector(".message").innerHTML="Draw !";
}
else if(num1>num2){
    document.querySelector(".message").innerHTML="<i class='fas fa-trophy'></i> Player 1 won !";
}
else {
    document.querySelector(".message").innerHTML="Player 2 won ! <i class='fas fa-trophy'></i>";
}
