#pragma strict

function Start () {

}

function Update () {

var player:GameObject=GameObject.Find("ScrollingShip");

if(player)
{
var xpos:float=player.transform.position.x;
var ypos:float=player.transform.position.y;

var new_ypos=transform.position.y;
if(new_ypos<ypos-0.5) new_ypos=ypos-0.5;
if(new_ypos>ypos+0.5) new_ypos=ypos+0.5;

transform.position=
new Vector3(
xpos-50,
new_ypos,
transform.position.z
);

}
}