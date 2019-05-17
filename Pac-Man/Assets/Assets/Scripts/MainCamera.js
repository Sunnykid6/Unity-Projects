#pragma strict

var target : Transform;
var relativePosition : Vector3;
 
function Start() {
	
	   var player: GameObject = GameObject.Find("Player"); 
       relativePosition = target.transform.position - transform.position;
}
 
function FixedUpdate () {
    var player: GameObject = GameObject.Find("Player");
    transform.position = target.transform.position - relativePosition;
}