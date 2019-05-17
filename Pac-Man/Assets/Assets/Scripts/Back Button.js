#pragma strict

var isBack=false;

function OnMouseEnter(){

	renderer.material.color=Color.red;
}

function OnMouseExit(){

	renderer.material.color=Color.white;
}

function OnMouseUp(){

	if (isBack==true) {

		Application.LoadLevel(0);
	}
}
function Update () {

}