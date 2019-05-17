#pragma strict

var isBack=false;

function OnMouseEnter(){
//change text color
renderer.material.color=Color.red;
}

function OnMouseExit(){
//change text color
renderer.material.color=Color.white;
}

function OnMouseUp(){
//is this quit
if (isBack==true) {
//quit the game
Application.LoadLevel(0);
}
}
function Update () {

}