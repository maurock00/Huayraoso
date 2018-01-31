using UnityEngine;
using System.Collections;

public class Balaaaaaaaaas : MonoBehaviour {

	public GameObject puntos;
	public int puntaje=0;
	void Start () {
	
	}
	
	void OnCollisionEnter(Collision hit)
	{
		if(hit.gameObject.tag == "tigre" )
		{
			Destroy(GameObject.FindWithTag("bala"));
			puntaje+=10;
			Debug.Log("Apunto: "+puntaje);
			puntos.guiText.text=puntaje.ToString("D2");
			
		}
	}

	void Update () {
	
	}
}
