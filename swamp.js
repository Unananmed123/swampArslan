"use strict";

// let user = prompt("Введите свое имя", "User1231231");

let name = document.querySelector('.nameUser');

// name.innerText = user;

const canvas = document.querySelector('#game');
const ctx = canvas.getContext("2d");

const headScore = document.querySelector('.score');

const foodImg = new Image();
foodImg.src = "./images/food2.png";
const korzinaImg = new Image();
korzinaImg.src = "./images/Billy.jpg"

let box = 25;
let score = 0;

let headFood = {
    x: Math.floor((Math.random() * 15)) * box,
    y: box * 2
};

let swamp = {y: canvas.height / 2};



canvas.addEventListener("mousemove", (event) =>{
    swamp.x = event.clientX;
});

function drawGame(){
    ctx.fillStyle = "#5d5d5d";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(foodImg, headFood.x, headFood.y);
    ctx.drawImage(korzinaImg, swamp.x, swamp.y)

    let swampX = swamp.x;
    let swampY = swamp.y;

    if (swampX)

}

let gameStart = setInterval(drawGame, 200);


