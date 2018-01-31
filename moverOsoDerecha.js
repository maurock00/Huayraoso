#pragma strict
var oso: GameObject;

function Start () {

}

function Update () {

	if(Input.touchCount == 1 ){
		 var j: int = 0;
		 for(var i : int = 0; i < Input.touchCount; i++){
		 
			 var touch : Touch = Input.GetTouch(i);
			 
			 if(touch.phase == TouchPhase.Began && guiTexture.HitTest(touch.position)){
			 	oso.transform.Rotate(0,180,0); 
			 }
		}
	 }
	 else{
	 
	 }

}