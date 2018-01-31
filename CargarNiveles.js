function onTriggerEnter(other : Collider){
	if(other.gameObject.tag == "Player")
		Application.LoadLevel("2");
}