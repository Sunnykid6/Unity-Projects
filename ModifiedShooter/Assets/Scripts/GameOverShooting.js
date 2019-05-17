#pragma strict

public var shotprefab:GameObject;

function Start () {

}

function Update () {

if(Input.GetKeyDown("space"))
{
Instantiate(shotprefab,Vector3(transform.position.x,transform.position.y,0),
Quaternion.AngleAxis(90,Vector3.forward));
}

}