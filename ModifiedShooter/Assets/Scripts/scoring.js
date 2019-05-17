#pragma strict

var hScore: TextMesh;
static var score:int;
static var lives:int;

function Start () {

score=0;
lives=3;
}

function OnGUI(){
GUI.Box(Rect(10,10,120,30),"Score:  "+score);
GUI.Box(Rect(Screen.width-100,10,90,30),"Lives: "+lives);

var player:GameObject=GameObject.Find("ScrollingShip");
if(!player)
{
GUI.Button(Rect(Screen.width/2-200,
Screen.height/2-50,
400,50),"Game Over");
}
if(player)
if(player.transform.position.x<-3416.0)
{
Application.LoadLevel(3);
}
}

function Update () {



}