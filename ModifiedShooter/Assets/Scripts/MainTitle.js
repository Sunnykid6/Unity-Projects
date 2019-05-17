#pragma strict

var backgroundTexture:Texture;

function OnGUI(){
GUI.DrawTexture(
Rect(0,0,Screen.width,Screen.height),backgroundTexture);
if(Input.anyKeyDown)
{
Debug.Log("A Key or mouse click has been Detected");
Application.LoadLevel("MainScene");
}
}

function Start () {

}

function Update () {

}