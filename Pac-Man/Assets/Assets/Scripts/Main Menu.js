#pragma strict

var isInstructions=false;

function OnMouseEnter(){

	renderer.material.color=Color.red;
}

function OnMouseExit(){

	renderer.material.color=Color.white;
}

function OnMouseUp(){

	if (isInstructions==true) {
		Application.LoadLevel(3);
	}
	else {
		Application.LoadLevel(1);
	}
}

function Update(){

	if (Input.GetKey(KeyCode.Escape)) { 
		Application.Quit();
	}
}