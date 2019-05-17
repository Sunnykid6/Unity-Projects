#pragma strict

function InitPosition(){

	transform.position.x=-3.406186;
	transform.position.y=0.397794;
	transform.position.z=-3.467048;
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