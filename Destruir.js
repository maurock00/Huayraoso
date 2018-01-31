var speed:int=5;
var puntaje:int=0;
function OnControllerColliderHit(hit:ControllerColliderHit)
{

		if(hit.gameObject.tag == "comida" )
		{
			Destroy(this.gameObject);
		
		}
	
}