#pragma strict

var speed = 30;

var originalRotationY : float;
 
function InitRotation (){

transform.rotation = Quaternion.identity;

}
  
function Start () {
     originalRotationY = transform.eulerAngles.y;
 }

function Update () {

	if(Input.GetKey("up")){
		transform.Rotate(Vector3.up*speed*Time.deltaTime);
		}

}