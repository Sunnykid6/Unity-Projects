#pragma strict

var factor:float=10;

function InitPosition () {
	transform.position.x=0.3423691;
	transform.position.y=-0.1503776;
	transform.position.z=-3.531427;
	rigidbody.velocity=Vector3(0,0,0);
	}

function Start () {

	InitPosition();

}

function Update () {

	if(Input.GetKey("up")){
		rigidbody.AddForce(Vector3.forward*factor);
		transform.rotation=Quaternion.LookRotation(rigidbody.velocity);
	}	
	
	if(Input.GetKey("down")){
		rigidbody.AddForce(Vector3.down*factor);
		transform.rotation=Quaternion.LookRotation(rigidbody.velocity);
	}

	if(Input.GetKey("left")){
		rigidbody.AddForce(Vector3.left*factor);
		transform.rotation=Quaternion.LookRotation(rigidbody.velocity);
	}

	if(Input.GetKey("right")){
		rigidbody.AddForce(Vector3.right*factor);
		transform.rotation=Quaternion.LookRotation(rigidbody.velocity);
	}	


	if(scoring.initlevel){
		InitPosition();
	}
}