using UnityEngine;
using System.Collections;

public class AleatorioTigre : MonoBehaviour 
{
	public GameObject tigre;
	public GameObject[] listaTigre;
	
	void Update () 
	{
		listaTigre = GameObject.FindGameObjectsWithTag ("tigre");
		if (listaTigre.Length == 0)
			TigreSpawn ();
	}

	public void TigreSpawn()
	{
		for (int i=0; i<1; i++) 
		{
			Vector3 randomSpawn = new Vector3(Random.Range(705.9f,1437.2f), Random.Range(22.6f,285.9f),492.6f);
			Instantiate(tigre, randomSpawn, transform.rotation);
		}
	}
}
