#pragma strict

public var shotexplo:AudioClip;
public var shotspeed:float=1.0;

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
if(other.tag=="terrain")
{
Destroy(gameObject);
}
if(other.tag=="rocket")
{
audio.PlayClipAtPoint(shotexplo,transform.position);
scoring.score+=200;
Destroy(gameObject);
Destroy(other.gameObject);
}
}
