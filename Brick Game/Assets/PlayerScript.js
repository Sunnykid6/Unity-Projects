#pragma strict
function OnTriggerEnter(other: Collider)
{
BallScript.yspeed=-BallScript.yspeed;
if(other.collider.gameObject.transform.position.x>
gameObject.transform.position.x)
{
BallScript.xspeed=Mathf.Abs(BallScript.xspeed);
}
else
{
BallScript.xspeed=-Mathf.Abs(BallScript.xspeed);
}
BallScript.collflag=true;
}
function Start () {
Screen.lockCursor=true;
}

function Update () {
if (Input.GetKey("left")){
transform.Translate(-20*Time.deltaTime,0,0);
}
if (Input.GetKey("right")){
transform.Translate(20*Time.deltaTime,0,0);
}
var h=30.0*Time.deltaTime*Input.GetAxis("Mouse X");
transform.Translate(h,0,0);
}