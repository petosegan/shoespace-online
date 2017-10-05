var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var slider_change = function() {
    var xPos = document.getElementById('horz-slider').value;
    var yPos = document.getElementById('vert-slider').value;
    var scale = 300;

    ctx.fillStyle = 'green';
    ctx.clearRect(0, 0, scale, scale);
    ctx.beginPath();
    ctx.arc(xPos*scale, (1-yPos)*scale, 10, 0, 7);
    ctx.fill();
}

slider_change();

document.getElementById('horz-slider').onchange = slider_change;
document.getElementById('vert-slider').onchange = slider_change;
