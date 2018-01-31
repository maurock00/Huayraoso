var proyectil : Rigidbody;
var sonidoDisparo : AudioClip;
var velocidadProyectil: float = 20.0;
var balas: GameObject;
var totalBalas:int=5;
var finPerdido: GameObject;
var puntaje:int=0;
var tigre: GameObject;
var disparo: GUITexture;
var volverJugar: GameObject;
var volverMapaPerder: GameObject;
var puntosLabel:GUIText;
var puntosTotal: GameObject;
var msjDisparar: GameObject;
var msjGirar: GameObject;
var msjExpli: GameObject;


volverJugar.gameObject.active=false;
volverMapaPerder.gameObject.active=false;

function Start()
{
	puntosTotal=GameObject.Find("Puntaje");
	puntosLabel=puntosTotal.GetComponent(GUIText);
	Destroy(msjDisparar,3);
	Destroy(msjGirar,3);
	Destroy(msjExpli,3);
}
function Update () 
{
	var contenido = puntosLabel.text;
	if(Input.touchCount == 1 )
    {
         for(var i : int = 0; i < Input.touchCount; i++)
        { 
        	var touch : Touch = Input.GetTouch(i);
			if(touch.phase == TouchPhase.Ended && disparo.HitTest(touch.position))
			{
				var bala : Rigidbody = Instantiate(proyectil,transform.position, transform.rotation);
				bala.velocity = transform.TransformDirection(Vector3(0,0,velocidadProyectil));
				Physics.IgnoreCollision(bala.collider, transform.root.collider);
				audio.PlayOneShot(sonidoDisparo);
					totalBalas--;
					balas.guiText.text=totalBalas.ToString("D1");
			}
			else if (totalBalas==0 && contenido=="20")
			{
				finPerdido.guiText.text="PARTIDA TERMINADA";
				volverJugar.gameObject.active=true;
				volverMapaPerder.gameObject.active=true;
				Destroy(GameObject.FindWithTag("arma"));
				Destroy(GameObject.FindWithTag("tigre"));
			}
			else if (totalBalas==0 && contenido=="10")
			{
				finPerdido.guiText.text="PARTIDA TERMINADA";
				volverJugar.gameObject.active=true;
				volverMapaPerder.gameObject.active=true;
				Destroy(GameObject.FindWithTag("arma"));
				Destroy(GameObject.FindWithTag("tigre"));
			}
			else if (totalBalas==0 && contenido=="0")
			{
				finPerdido.guiText.text="PARTIDA TERMINADA";
				volverJugar.gameObject.active=true;
				volverMapaPerder.gameObject.active=true;
				Destroy(GameObject.FindWithTag("arma"));
				Destroy(GameObject.FindWithTag("tigre"));
			}

			
		}
	}
}


@script RequireComponent(AudioSource)
