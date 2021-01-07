var canvas = document.getElementById("cans");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "gray";
ctx.lineWidth = 1;
ctx.rect(150,143,380,180);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(230,200,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(330,200,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(430,200,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
ctx.arc(280,250,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(380,250,40,0,2 * Math.PI);
ctx.stroke();