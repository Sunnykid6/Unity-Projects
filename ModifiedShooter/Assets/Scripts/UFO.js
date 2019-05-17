#pragma strict

public var shotexplo:AudioClip;
public var radius:float=0.2;
private var centerx: float;
private var centery: float;
private var saucertime:float;
var saucershot:GameObject;

function Start () {

saucertime=0;
centerx=transform.position.x;
centery=transform.position.y;
}

function Update () {

saucertime+=Time.deltaTime;
transform.position.x=centerx+radius*Mathf.Sin(saucertime*4.0);
transform.position.y=centery+radius*Mathf.Cos(saucertime*4.0);

var player:GameObject=GameObject.Find("ScrollingShip");
if(player.transform.position.x-transform.position.x<100.0)
{
if(saucertime>3.14159/2)
{
Instantiate(saucershot,Vector3(transform.position.x,transform.position.y,0.0),Quaternion.AngleAxis(90,Vector3.forward));
saucertime=0.0;
}
}
}
function OnTriggerEnter(other:Collider){
if(other.tag=="scrollingship")
{
audio.PlayClipAtPoint(shotexplo,transform.position);
Destroy(gameObject);
scoring.lives --;
}
if(other.tag=="shipshot")
{
audio.PlayClipAtPoint(shotexplo,transform.position);
scoring.score+=400;
Destroy(gameObject);
Destroy(other.gameObject);
}
}
