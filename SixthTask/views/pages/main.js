var CHAT= function(username){
   
  this.username=username;s
  this.message = $('#input').val(); 
  this.DATA=new Array();

}

CHAT.protoype.save=function(){
      $.ajax({
	    url: 'http://nodedatastore.herokuapp.com/sana', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(this.DATA),
	    success:function(res){console.log(res);}
	});
}
CHAT.prototype.load=function(){
$.get('http://nodedatastore.herokuapp.com/sana',function(res){
        
        if (res.length) //cuz array has a length variable
            
            this.DATA = res;
        
        else
            
            this.DATA = [];

       
        this.RenderJSON(this.DATA);

});
}
CHAT.prototype.RenderJSON=function(data){
   $('#container').empty();
        for(var i=0; i<data.length;i++){    //This loop traverses through the DATA[] array to display message on view.
            
        $('#container').append(data[i]+"</br>");

        
        $("#clear").click(function(value){
           this.DATA = [];
           this.save();
           this.load();
        });
    }
    
}

 $("#submit").click(function(value){
    

   this. DATA.push(username + " " + takeInput);
    console.log(DATA);
    this.RenderJSON(DATA);
    this.save();
    $("#input").val('');
   
});
$(document).ready(
    function(){
      var obj=new CHAT(prompt("Enter username"));
        setInterval(function(){
            $('#container').html(load());
        },1000);
    }
);
/*

var DATA = new Array();
load();
var username;

// The method fires when user 1 presses send button
// The method pushes data to the DATA[] array, Renders and saves
 $("#submit").click(function(value){
    var takeInput = $('#input').val();

    DATA.push(username + " " + takeInput);
    console.log(DATA);
    RenderJSON(DATA);
    save();
    $("#input").val('');
   
});


// This method appends the messages and displays it in the view. 
// This method is also responsible for "Clearing" the chat from Server.
function RenderJSON(data){

        $('#container').empty();
        for(var i=0; i<data.length;i++){    //This loop traverses through the DATA[] array to display message on view.
            
        $('#container').append(data[i]+"</br>");

        
        $("#clear").click(function(value){
           DATA = [];
           save();
           load();
        });
    }
}

// This method sends data to the server and stores it there.
function save(){
    $.ajax({
	    url: 'http://nodedatastore.herokuapp.com/sana', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(DATA),
	    success:function(res){console.log(res);}
	});
}

// This method loads data from the server
function load(){

   
    $.get('http://nodedatastore.herokuapp.com/sana',function(res){
        
        if (res.length) //cuz array has a length variable
            
            DATA = res;
        
        else
            
            DATA = [];

       
        RenderJSON(DATA);

   
    
    });

}   

// This method is responsible for creating intervals, so the page refreshes automatically

$(document).ready(
    function(){
        username = prompt("Enter username");
        console.log(username);
        setInterval(function(){
            $('#container').html(load());
        },1000);
    }
);*/