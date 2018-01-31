function OnTriggerEnter (other : Collider){
	if (other.gameObject.tag=="Player")
		Application.LoadLevel("Ultima Escena");

}