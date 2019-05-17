#pragma strict

var isPlayAgain=false;

function OnMouseEnter(){
//change text color
renderer.material.color=Color.yellow;
}

function OnMouseExit(){
//change text color
renderer.material.color=Color.white;
}

function OnMouseUp(){
//is this quit
if (isPlayAgain==true) {
//quit the game
Application.LoadLevel(1);
}
}
function Update () {

}