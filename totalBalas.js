var puntaje:int=0;
var puntos: GameObject;
var finGanado: GameObject;
var finGanado2: GameObject;

var volverMapaGanar: GameObject;
volverMapaGanar.gameObject.active=false;
var piedrasLabel:GUIText;
var piedrasTotal: GameObject;

function Start()
{
	piedrasTotal=GameObject.Find("Piedras");
	piedrasLabel=piedrasTotal.GetComponent(GUIText);
}

function OnCollisionEnter(hit:Collision)
{
		if(hit.gameObject.tag == "bala" )
		{
			Destroy(GameObject.FindWithTag("bala"));
			puntaje+=10;
			Debug.Log("Apunto: "+puntaje);
			puntos.guiText.text=puntaje.ToString("D2");
			
		}
}

function Update () 
{
	var contenido = piedrasLabel.text;
		
	if(puntaje==30 && contenido=="2")
	{
		finGanado.guiText.text="GANASTE Y TIENES UN BONO!";
		volverMapaGanar.gameObject.active=true;
		puntaje+=50;
		puntos.guiText.text=puntaje.ToString("D2");
		Destroy(GameObject.FindWithTag("arma"));
		Destroy(GameObject.FindWithTag("tigre"));
		CancelInvoke();	
	}
	
	if(puntaje==30 && contenido=="1")
	{
		finGanado2.guiText.text="GANASTE!";
		volverMapaGanar.gameObject.active=true;
		puntos.guiText.text=puntaje.ToString("D2");
		Destroy(GameObject.FindWithTag("arma"));
		Destroy(GameObject.FindWithTag("tigre"));
		CancelInvoke();	
	}
	
	if(puntaje==30 && contenido=="0")
	{
		finGanado2.guiText.text="GANASTE!";
		volverMapaGanar.gameObject.active=true;
		puntos.guiText.text=puntaje.ToString("D2");
		Destroy(GameObject.FindWithTag("arma"));
		Destroy(GameObject.FindWithTag("tigre"));
		CancelInvoke();	
	}

}

