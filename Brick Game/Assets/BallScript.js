#pragma strict
var BeepSound: AudioClip;
static var launchtimer: float;
static var xspeed: float;
static var yspeed: float;
static var collflag: boolean;
function Start () {
launchtimer=2.0;
xspeed=8.0;
yspeed=8.0;
collflag=true;
}

function Update () {
transform.position.z=0;
launchtimer-=Time.deltaTime;
if (launchtimer<=0.0)
{
transform.Translate(Vector3(xspeed,yspeed,0)*Time.deltaTime);
launchtimer=0.0;
}
}
function OnTriggerEnter(other : Collider)
{
audio.PlayOneShot(BeepSound);
}
