#pragma strict

public var shotprefab:GameObject;

function Start () {

}

function Update () {

transform.Translate(-40*Time.deltaTime,0,0);

if(Input.GetKey("w"))
{
transform.Translate(0,1,0*Time.deltaTime);
}
if(Input.GetKey("s"))
{
transform.Translate(0,-1,0*Time.deltaTime);
}
if(Input.GetKey("d"))
{
transform.Translate(-1,0,0*Time.deltaTime);
}
if(Input.GetKey("a"))
{
transform.Translate(0.5,0,0*Time.deltaTime);
}
if(Input.GetKeyDown("space"))
{
Instantiate(shotprefab,Vector3(transform.position.x,transform.position.y,-10.1),
Quaternion.AngleAxis(90,Vector3.forward));
}
}
function OnTriggerEnter (other:Collider)
{
if(other.tag=="terrain")
{
Destroy(gameObject);
Application.LoadLevel(0);
}
if(scoring.lives==1)
{
Application.LoadLevel(0);
}

}


