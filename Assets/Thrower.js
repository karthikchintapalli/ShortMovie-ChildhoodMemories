#pragma strict
var theball:GameObject;
function Start () {
	
}
function Update(){
}

function ThrowBall () {
	var ballscript:BallScript=theball.GetComponent("BallScript");
	ballscript.Release();
}
