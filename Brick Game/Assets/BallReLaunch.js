#pragma strict
function OnTriggerEnter(other:Collider)
{
Scoring.lives--;

if (Scoring.lives == 0)
{
 Application.LoadLevel("BrickTitleScreen");
 }
BallScript.yspeed=-BallScript.yspeed;
BallScript.collflag=true;
other.transform.position=Vector3(0,-7,0);
BallScript.xspeed=8.0;
BallScript.yspeed=-8.0;
BallScript.launchtimer=1.0;
}
function Start () {

}

function Update () {

}