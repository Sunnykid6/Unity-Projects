#pragma strict
function OnTriggerEnter(other: Collider)
{BallScript.yspeed=-BallScript.yspeed;
BallScript.collflag=true;
}
function Start () {

}

function Update () {

}