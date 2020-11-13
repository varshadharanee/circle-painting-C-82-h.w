var canvas = document.getElementById("my_canvas")
var ctx = canvas.getContext("2d");
var width;
var color;
var radius
var last_y;
var last_x;
var mouseEvent;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    width = document.getElementById("width").value;
    color = document.getElementById("color").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    var current_x = e.clientX - canvas.offsetLeft;
    var current_y = e.clientY - canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_x,current_y,radius,0,2*Math.PI);
        ctx.stroke();
        
    }
    last_x = current_x;
    last_y = current_y;
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}


