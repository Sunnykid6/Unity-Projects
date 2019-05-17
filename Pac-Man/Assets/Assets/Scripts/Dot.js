#pragma strict

public var dotsound: AudioClip;

function Start () {

}

function Update () {

	if(scoring.initlevel){
		Revive();
	}
}

function Suspend(){

	gameObject.renderer.enabled=false;
	transform.position.y=20;
}


function Revive(){

	gameObject.renderer.enabled=true;
	transform.position.y=0;
	scoring.dots++;

}

function OnTriggerEnter(other:Collider)
{
	if(other.tag=="Player")
	{
		audio.PlayClipAtPoint(dotsound, transform.position);
		Suspend();
		scoring.dots--;
		scoring.score+=10;
	}
}
