
var listarr=new Array();
var array="";
function addData(){
var input = document.getElementById('input').value;
var div = document.getElementById('container');
div.innerHTML = div.innerHTML + "<div id='"+ input +"' onclick='removeItem(this.id)'> <input  type='checkbox' id='"+ input +"'  onclick='removeItem(this.id)' > <label>"+input+"</label></div>";
//listarr[input]=input;
listarr.push(input);
saveItem();


}

function removeItem(id){
    var div = document.getElementById(id);
    div.parentNode.removeChild(div);
	//removeItemFromLocalStorage(counter);
	//document.getElementById("result").innerHTML = array;
	    

}/*
function removeItemFromLocalStorage(id){
			 //document.getElementById("result").innerHTML = id;

	localStorage.removeItem(id);
	
}*/
function saveItem(){
	//document.getElementById("result").innerHTML = id;
    //storing items
	 localStorage.setItem("array", JSON.stringify(listarr));


    
	
}
function start(){
	array = JSON.parse(localStorage.getItem("array"));
	
listarr=array;
		
		
		
}
