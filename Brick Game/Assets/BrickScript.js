#pragma strict

 function OnTriggerEnter (other: Collider)
 {
 if (BallScript.collflag == true)
 {
 BallScript.yspeed = -BallScript.yspeed;
 BallScript.collflag = false;
 Destroy(gameObject);
 Scoring.score+=10;
 }
 }
function Start () {

}

function Update () {

}