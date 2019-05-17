#pragma strict

static var score: int;
static var lives: int;
static var dots: int;
static var totaldots: int;
static var level: int;
static var initlevel: boolean;

function Start () {
	score=0;
	lives=3;
	totaldots=414;
	dots=414;
	level=1;
	initlevel=false;

}

function Update () {

	if(dots==0){
		initlevel=true;
			level++;
	}
	if(dots==414){
		initlevel=false;
	}

}

function OnGUI() {
	var player: GameObject= GameObject.Find("Player");

	GUI.Box(Rect(10, 10, 90, 30), "Score: "+score);
	GUI.Box(Rect(Screen.width-100, 10, 90, 30), "Lives: "+lives);
	GUI.Box(Rect(Screen.width/2 - 100, 10, 200, 30), "Dots: "+dots);
	GUI.Box(Rect(10, Screen.height-100, 90, 30), "Level: "+level);

	if(!player){
		GUI.Button(Rect(Screen.width/2-200, Screen.height/2-50, 400, 50), "Game Over");
	}
	if(scoring.level==2){
		GUI.Button(Rect(Screen.width/2-200, Screen.height/2-50, 400, 50), "The End");
	}
}