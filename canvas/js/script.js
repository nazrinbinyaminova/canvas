window.onload = function(){
	var canvas = document.getElementById('first');
	var ctx = canvas.getContext('2d');

	// var arr= [100, 45, 35, 70, 90]
	// var width=50;
	// var currX=10;
	// var base=10;

	

	// for (var i = 0; i < arr.length; i++) {
	// 	var h = arr[i];
	// 	var y=canvas.height-h
	// 	ctx.fillStyle = 'green';
	// 	ctx.fillRect(currX, y, width, h);

	// 	ctx.fillStyle = 'navy';
	// 	ctx.beginPath();
	// 	ctx.arc(currX+width/2, y, 15, 2*Math.PI, false)
	// 	ctx.fill()
	// 	ctx.strokeStyle='white'
	// 	ctx.lineWidth=2
	// 	ctx.stroke()
	// 	currX+=width+10;
	// }

	ctx.beginPath();
	ctx.moveTo(80,50);
	ctx.arcTo(200, 50, 200, 70, 20)
	ctx.stroke(200, 70);
}