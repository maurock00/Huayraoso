var timer: int=45;
var tiempo: GameObject;
var fin: GameObject;
var jugar: GameObject;
var mapa: GameObject;
var mapaGanado: GameObject;
var finGanado: GameObject;
var cubo: GameObject;
var flecha: GameObject;
var particula1: GameObject;
var particula2: GameObject;
fin.guiText.text="";
finGanado.guiText.text="";
var mensajeCaminar:GameObject;
var mensajeGirar:GameObject;

function Start () 
{
	InvokeRepeating("Timer",1.0,1.0);
	jugar.GetComponent(GUITexture).enabled=false;
	mapa.GetComponent(GUITexture).enabled=false;
	mapaGanado.GetComponent(GUITexture).enabled=false;
	Destroy(flecha,1.5);
	Destroy(mensajeCaminar,3);
	Destroy(mensajeGirar,3);
}

function Update () 
{}

function Timer()
{
	if (timer>0)
		{
			timer-=1;
			tiempo.guiText.text=timer.ToString("D2");
		}
		else if(timer==0)
		{
			fin.guiText.text="FIN DEL JUEGO!";
			jugar.GetComponent(GUITexture).enabled=true;
			mapa.GetComponent(GUITexture).enabled=true;	
			Destroy(cubo);
			Destroy(particula1);
			Destroy(particula2);	
		}
}
function OnTriggerEnter (other : Collider){
	if (other.gameObject.tag=="Player")
	{
		finGanado.guiText.text="LABERINTO COMPLETADO!";
		mapaGanado.GetComponent(GUITexture).enabled=true;
		Debug.Log("LABERINTO COMPLETADO!");
		CancelInvoke();
	}
}

	









