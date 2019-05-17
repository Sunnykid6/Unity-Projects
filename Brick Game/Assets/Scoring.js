#pragma strict
 static var lives:int;
 static var score:int;
 
 function OnTriggerEnter (other: Collider)
 {
 if (BallScript.collflag == true)
 {
 BallScript.yspeed = -BallScript.yspeed;
 BallScript.collflag = false;
 Destroy(gameObject);
 }
 }
function Start () {
 score = 0;
 lives = 3;
 }
 
 function OnGUI () {
 GUI.Box (Rect (10,10,90,30), "Score: "+score);
 GUI.Box (Rect (Screen.width - 100,10,90,30),"Lives: "+lives);
 }

function Update () {

}