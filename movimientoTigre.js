#pragma strict
var tigre: GameObject;
var tiempoTigre: float = 0;


function Start () {
	
}

function Update () {

	
	if(tiempoTigre >= 0 && tiempoTigre<=6 ){
		    tigre.transform.Translate(-100*Time.deltaTime,0f,0f);
			tiempoTigre += Time.deltaTime;
			if(tiempoTigre>=6)
			{
				tiempoTigre -= tiempoTigre ;
				tigre.transform.Rotate(0f,180f,0f);
			}
			
	}
	if(tiempoTigre >=6 && tiempoTigre<=12){
			
			tigre.transform.Translate(-100*Time.deltaTime,0f,0f);
			tiempoTigre += Time.deltaTime;
			if(tiempoTigre>=12)
			{
				tiempoTigre -= tiempoTigre ;
				tigre.transform.Rotate(0f,180f,0f);
			}
	}
	
	
}