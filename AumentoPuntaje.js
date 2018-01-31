var puntaje:int=0;
var puntos: GameObject;
var mapaGanado: GameObject;
var finGanado: GameObject;

var timer: int=45;
var mensajePuntaje:GameObject;
var mensajeCaminar:GameObject;
var mensajeGirar:GameObject;
var tiempo: GameObject;
var fin: GameObject;
var jugar: GameObject;
var mapa: GameObject;
jugar.gameObject.active=false;
mapa.gameObject.active=false;
mapaGanado.gameObject.active=false;

function OnCollisionEnter(hit:Collision)
{
		if(hit.gameObject.tag == "zanahoria" )
		{
			Destroy(GameObject.FindWithTag("zanahoria"));
			puntaje++;
			Debug.Log("Esta listo: "+puntaje);
			puntos.guiText.text=puntaje.ToString("D2");
			
		}
		else if(hit.gameObject.tag == "tomate" )
		{
			Destroy(GameObject.FindWithTag("tomate"));
			puntaje++;
			Debug.Log("Esta listo: "+puntaje);
			puntos.guiText.text=puntaje.ToString("D2");
			
		}
		else if(hit.gameObject.tag == "animal" )
		{
			Destroy(GameObject.FindWithTag("animal"));
			if (puntaje>0)
			{
				puntaje--;
			}
			if(puntaje<=0)
			{
				SendMessage("Partida Terminada", SendMessageOptions.DontRequireReceiver);
			}
			Debug.Log("Esta listo: "+puntaje);
			puntos.guiText.text=puntaje.ToString("D2");
		}
	
}

function Update () 
{
	if(puntaje==10)
	{
		finGanado.guiText.text="GANASTE!";
		mapaGanado.gameObject.active=true;
		CancelInvoke();	
		Destroy(GameObject.FindWithTag("zanahoria"));
		Destroy(GameObject.FindWithTag("animal"));
	    Destroy(GameObject.FindWithTag("tomate"));
	
	}
	else if(timer==0)
	{
			
			fin.guiText.text="FIN DEL JUEGO!";
			jugar.gameObject.active=true;
			mapa.gameObject.active=true;
			CancelInvoke();	
			Destroy(GameObject.FindWithTag("zanahoria"));
			Destroy(GameObject.FindWithTag("animal"));
	   	    Destroy(GameObject.FindWithTag("tomate"));
			
	}
	

}


function Start () 
{
	InvokeRepeating("Timer",1.0,1.0);
	Destroy(mensajePuntaje,2.5);
	Destroy(mensajeCaminar,2.5);
	Destroy(mensajeGirar,2.5);
}

function Timer()
{
		if (timer>0)
		{
			timer-=1;
			tiempo.guiText.text=timer.ToString("D2");
			
		}
		
	
}
	
		