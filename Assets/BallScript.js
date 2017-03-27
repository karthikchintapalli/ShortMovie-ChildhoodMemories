#pragma strict
var parentbone:GameObject;
var rigid:Rigidbody;
function Start () {
	transform.parent=parentbone.transform;
	rigid.useGravity=false;
}

function Update () {
	
}
function Release(){
	transform.parent=null;
	rigid.useGravity=true;
	transform.rotation=parentbone.transform.rotation;
	rigid.AddForce(transform.forward * -20000);

}