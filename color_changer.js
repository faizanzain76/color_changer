let colors=["red","blue","green","yellow","orange"];

let randomColor=colors[Math.floor(Math.random()*colors.length)];

document.body.style.background=randomColor;

console.log("Color changed");
