#pragma strict

static var initlevel: boolean;
var aleft: AudioClip;
var aright: AudioClip;
var aup: AudioClip;
var adown: AudioClip;
var factor: float=10;

function InitPosition(){

	transform.position.x=0.3423691;
	transform.position.y=-0.1503776;
	transform.position.z=-3.531427;
	rigidbody.velocity=Vector3(0, 0, 0);

}


function Start () {

	InitPosition();

}

function Update () {

	if(Input.GetKey("up")){
		rigidbody.AddForce(Vector3.forward*factor);
	}
	if(Input.GetKeyDown("up")){
		audio.PlayClipAtPoint(aup, transform.position);
	}
	if(Input.GetKey("down")){
		rigidbody.AddForce(Vector3.back*factor);
	}
	if(Input.GetKeyDown("down")){
		audio.PlayClipAtPoint(adown, transform.position);
	}
	if(Input.GetKey("left")){
		rigidbody.AddForce(Vector3.left*factor);
	}
	if(Input.GetKeyDown("left")){
		audio.PlayClipAtPoint(aleft, transform.position);
	}
	if(Input.GetKey("right")){
		rigidbody.AddForce(Vector3.right*factor);
	}
	if(Input.GetKeyDown("right")){
		audio.PlayClipAtPoint(aright, transform.position);
	}
	if(scoring.initlevel){
		InitPosition();
	}
	if(scoring.lives==0){
		Destroy(gameObject);
		Application.LoadLevel(2);
	}
	if(scoring.level==2){
		Destroy(gameObject);
		Application.LoadLevel(2);
	}
}