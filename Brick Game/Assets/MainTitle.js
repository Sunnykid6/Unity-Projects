#pragma strict
 
 var backgroundTexture: Texture;
 
 function OnGUI() {
 GUI.DrawTexture(
 Rect(0, 0, Screen.width, Screen.height), backgroundTexture);
 if (Input.anyKeyDown)
 {
 Debug.Log("A key or mouse click has been detected"); 
 Application.LoadLevel("BrickScene");
 }
 }
function Start () {
}

function Update () {
}