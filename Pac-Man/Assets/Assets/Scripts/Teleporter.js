#pragma strict

var destination:Transform;

function OnTriggerEnter(other:Collider){

	if(other.tag=="Sphere")
	{
		other.transform.position = destination.position;
	}	

	if(other.tag=="Enemy")
	{
		other.transform.position = destination.position;
	}	
}



function Start () {

}

function Update () {

}