
function OnCollisionEnter(hit:Collision)
{
		if(hit.gameObject.tag == "zanahoria" )
		{
			Destroy(GameObject.FindWithTag("zanahoria"));
			Debug.Log("z");
			
		}
		else if(hit.gameObject.tag == "tomate" )
		{
			Destroy(GameObject.FindWithTag("tomate"));
			Debug.Log("t");
			
		}
		else if(hit.gameObject.tag == "animal" )
		{
			Destroy(GameObject.FindWithTag("animal"));
			Debug.Log("a");
		}
	
}