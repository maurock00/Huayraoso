var proyectil : Rigidbody;
var sonidoDisparo : AudioClip;
var velocidadProyectil: float = 20.0;
var balas: GameObject;
var totalBalas:int=5;
var finPerdido: GameObject;
var puntaje:int=0;
var puntos: GameObject;
var tigre: GameObject;

function OnMouseDown() 
{
	
		var bala : Rigidbody = Instantiate(proyectil,Vector3(910.7577,65.657703,-108.9836),transform.rotation);
		bala.velocity = transform.TransformDirection(Vector3(0,0,velocidadProyectil));
		Physics.IgnoreCollision(bala.collider, transform.root.collider);
		audio.PlayOneShot(sonidoDisparo);
		Destroy(GameObject.FindWithTag("bala"),3);
		totalBalas--;
		balas.guiText.text=totalBalas.ToString("D1");
	
	
	if (totalBalas==0)
	{
		finPerdido.guiText.text="PARTIDA TERMINADA";
		Destroy(GameObject.FindWithTag("arma"));
	}
}

function OnCollisionEnter(hit:Collision)
{
		if(hit.gameObject.name == tigre )
		{
			Destroy(GameObject.FindWithTag("bala"));
			Destroy(GameObject.FindWithTag("tigre"));
			puntaje+=10;
			Debug.Log("Apunto: "+puntaje);
			puntos.guiText.text=puntaje.ToString("D2");
		}
}

@script RequireComponent(AudioSource)

