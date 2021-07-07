// image1 //

var randomNumber = Math.floor(Math.random() * 6) + 1;

var randomImage = "images/dice" + randomNumber + ".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImage);

// image2 //

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

// statements //

if (randomNumber > randomNumber2){
    document.querySelector("h1").textContent = "🥇Player 1 wins!";
}
else if (randomNumber2 > randomNumber){
    document.querySelector("h1").textContent = "Player 2 wins!🎉";
}
else {
    document.querySelector("h1").textContent = "Draw"
}