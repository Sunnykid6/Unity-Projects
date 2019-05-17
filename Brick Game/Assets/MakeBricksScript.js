#pragma strict

function Start () {
for(var y=0;y<8;y++)
{
for(var x=0;x<15;x++)
{
var cube=GameObject.CreatePrimitive(PrimitiveType.Cube);
cube.transform.position=Vector3(x*2-14,y-1,0);
cube.transform.localScale=Vector3(1.9,0.9,1);
cube.AddComponent("BrickScript");
cube.collider.isTrigger=true;
if (y<2)
 cube.renderer.material.color = Color.yellow;
 else if (y<4)
 cube.renderer.material.color = Color.cyan;
 else if (y<6)
 cube.renderer.material.color = Color.blue;
 else
 cube.renderer.material.color = Color.red;
}
}
}
function Update () {

}