#pragma strict

public var enemysound: AudioClip;
public var factor:float=5;
public var initPosition:Vector3;
  
function Start () {

	initPosition=transform.position;
	
}

function RestorePosition(){

	transform.position=initPosition;

}

function Update () {

	var dir: Vector3 = Vector3(0, 0, 0);
	var player: GameObject = GameObject.Find("Player");

	if(player){
		dir=player.transform.position-transform.position;
	}

	rigidbody.AddForce(dir*factor*(0.6+0.2*scoring.level));

}

function OnCollisionEnter(collision:Collision){

	if(collision.gameObject.name=="Player")
	{
		scoring.lives--;
		audio.PlayClipAtPoint(enemysound, transform.position);
		collision.gameObject.transform.position.x=0;
		collision.gameObject.transform.position.y=0.18;
		collision.gameObject.transform.position.z=-3.476026;
		RestorePosition();
	}
}
