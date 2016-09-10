var DATA = [];
var username;
load();

$(document).ready(function(){
        username = prompt("Enter your Username");
    }
);

$('#submit').on('click',function(){
    var mssg = $('#input').val();

    DATA.push(username + ': ' + mssg); //sumair: hello
    renderJson(DATA);
    save();

    $('#input').val('');
});

function renderJson(data){
    $('#container').empty();

    for(var i in data){
        $('#container').append(data[i] + '</br>');
    }
}

function save(){
    localStorage.msg = JSON.stringify(DATA);
}

function load(){
    if(localStorage.msg){
       DATA = JSON.parse(localStorage.msg);
	renderJson(DATA);
}


}
$('#clear').on('click',function (){
	 $('#container').empty();
	 DATA=new Array();
	 localStorage.msg="";

});