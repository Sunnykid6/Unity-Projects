#pragma strict
function OnTriggerEnter (other: Collider)
{
BallScript.xspeed=-BallScript.xspeed;
BallScript.collflag=true;
}
function Start () {

}

function Update () {

}