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
			 	oso.animation.Play ("run"); 	
			 	for(j=0; j<=5;j++)
			 		oso.transform.Translate(0f,0f,100*Time.deltaTime);
			 
			 }
		}
	 }
	 else{
	 
	 }

}