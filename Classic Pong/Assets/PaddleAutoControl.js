#pragma strict

var speed:float=1.0;
private var ball:Transform;

function Start () {

}

function Update () {

var balls=GameObject.FindGameObjectsWithTag("ball");
var highest:float=0.0;
var highestBall:Transform;
for(var ball in balls){
if (ball.transform.position.y>highest)
{
highestBall=ball.transform;
highest=ball.transform.position.y;
}
}
if (highestBall&&highestBall.position.y>0)transform.position.x=Mathf.Lerp(transform.position.x,
highestBall.position.x,speed*Time.deltaTime);
if(GameObject.FindWithTag("ball"))
{
transform.position.x=Mathf.Clamp(transform.position.x,-14,14);
}
}

function OnCollisionEnter(collision:Collision)
{
var velo=collision.rigidbody.velocity.magnitude;
collision.rigidbody.velocity.x=(collision.transform.position.x-
transform.position.x)*8;
if(collision.rigidbody.velocity.magnitude < velo)collision.rigidbody.velocity*=
velo/collision.rigidbody.velocity.magnitude;
}