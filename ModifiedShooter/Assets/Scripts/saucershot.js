#pragma strict

public var shotspeed:float=-1.0;

function Start () {

}

function Update () { 
transform.Translate(0,shotspeed*Time.deltaTime,0);

var player: GameObject=GameObject.Find("ScrollingShip");

if(player.transform.position.x-transform.position.x>100)
Destroy(gameObject);

}
function OnTriggerEnter (other:Collider)
{
if(other.tag=="scrollingship")
{
Destroy(gameObject);
scoring.lives --;
}
}
