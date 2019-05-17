#pragma strict

function InitPosition(){

	transform.position.x=1.896491;
	transform.position.y=0.07511353;
	transform.position.z=1.942629;
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