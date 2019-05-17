#pragma strict

public var rocketspeed:float;
public var shotexplo:AudioClip;

private var flighttimer:float=0.0;


function Start () {

}

function Update () {

var player:GameObject=GameObject.Find("ScrollingShip");

if(player.transform.position.x-transform.position.x<100)
{
transform.Translate(0, rocketspeed*Time.deltaTime, 0);
flighttimer+=Time.deltaTime;
}
if(flighttimer>5.0)Destroy(gameObject);
}

function OnTriggerEnter (other: Collider) 
{
if(other.tag=="scrollingship")
{
audio.PlayClipAtPoint(shotexplo,transform.position);
scoring.lives --;
scoring.score+=400;
Destroy(gameObject);
}
if(other.tag=="shipshot")
{
Destroy(gameObject);
Destroy(other.gameObject);
}
if(flighttimer>1.0)
if(other.tag=="terrain")
{
Destroy(gameObject);
}
}