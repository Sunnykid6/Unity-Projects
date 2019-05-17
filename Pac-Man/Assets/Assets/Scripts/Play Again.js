#pragma strict

var isPlayAgain=false;

function OnMouseEnter(){

	renderer.material.color=Color.red;
}

function OnMouseExit(){

	renderer.material.color=Color.white;
}

function OnMouseUp(){

	if (isPlayAgain==true) {

		Application.LoadLevel(0);
	}
}
function Update () {

}