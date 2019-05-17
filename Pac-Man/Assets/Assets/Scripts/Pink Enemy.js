#pragma strict

function InitPosition(){

	transform.position.x=4.514474;
	transform.position.y=0.397794;
	transform.position.z=-2.365508;
	rigidbody.velocity=Vector3(0, 0, 0);
}

function Start () {

InitPosition();

}

function Update () {

	if(scoring.initlevel){
		InitPosition();
	}
}