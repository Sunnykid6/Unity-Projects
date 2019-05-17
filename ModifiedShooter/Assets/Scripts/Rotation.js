#pragma strict

function Start () {

}

function Update () {

		transform.Rotate(5*Time.deltaTime, 0, 0);
		
		transform.Rotate(0, Time.deltaTime, 0, Space.World);

}