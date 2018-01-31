using UnityEngine;
using System.Collections;



public class aleatorio : MonoBehaviour {

	public GameObject zanahoria;
	public GameObject animal;
	public GameObject tomate;
	public GameObject[] listaZanahoria;
	public GameObject[] listaAnimal;
	public GameObject[] listaTomate;
	public float tiempoZana = 5;
	public float tiempoTomate = 7;
	public float tiempoRaton = 3;

	void Update () 
	{
		listaZanahoria = GameObject.FindGameObjectsWithTag ("zanahoria");
		listaAnimal = GameObject.FindGameObjectsWithTag ("animal");
		listaTomate = GameObject.FindGameObjectsWithTag ("tomate");

		if(tiempoZana > 0){
			tiempoZana -= Time.deltaTime;
		}
		if(tiempoZana <= 0){
			ZanahoriaSpawn ();
			tiempoZana = 5;
		}

		if(tiempoTomate > 0){
			tiempoTomate -= Time.deltaTime;
		}
		if(tiempoTomate <= 0){
			TomateSpawn ();
			tiempoTomate = 7;
		}

		if(tiempoRaton > 0){
			tiempoRaton -= Time.deltaTime;
		}
		if(tiempoRaton <= 0){
			AnimalSpawn ();
			tiempoRaton = 3;
		}
	}
	public void ZanahoriaSpawn()
	{
		for (int i=0; i<1; i++) 
		{
			Vector3 randomSpawn = new Vector3(Random.Range(825f,1400f), 309.2f, 515.3f);
			Instantiate(zanahoria, randomSpawn, transform.rotation);
		}
	}

	public void TomateSpawn()
	{
		for (int i=0; i<1; i++) 
		{
			Vector3 randomSpawn = new Vector3(Random.Range(825f,1400f), 309.2f, 515.3f);
			Instantiate(tomate, randomSpawn, transform.rotation);
		}
	}
	public void AnimalSpawn()
	{
		for (int i=0; i<1; i++) 
		{
			Vector3 randomSpawn = new Vector3(Random.Range(825f,1400f), 309.2f, 515.3f);
			Instantiate(animal, randomSpawn, transform.rotation);
		}
	}
}
