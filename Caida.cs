using UnityEngine;
using System.Collections;

public class Caida : MonoBehaviour {

	void Update () {

		transform.Translate (transform.up * 2 * Time.deltaTime);
	}
}
