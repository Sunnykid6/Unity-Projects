#pragma strict


function InitPosition(){

	transform.position.x=-1.879802;
	transform.position.y=0.397794;
	transform.position.z=2.47266;
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