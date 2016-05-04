

$(document).ready(function(){

	var menu =0; 
	var map=0; 
	var one = true;
	var two =false;
	var three=false;

	$("#pageframe1").hide();
	$("#pageframe2").hide();
	$("#back1").hide();
	$("#back2").hide();	
	$("#mapframe").hide();//$("#sidebar").hide();
	
	$("#menuon").click(function(){
    	 //$("#pageframe").animate({left: '500px'});
    	 console.log("menu", menu);
    	 if (menu ==0) {
	    	 $("#rest").animate({
			   left: "220px",
			    width:"80%"
			    //"left": "200px"
			  }, 1500 );
	    	 $("#sidebar").animate({
			    "left": "0px"
			  }, 1500 ); 
	    	menu= menu+1;
	    }
	    else {
	    	$("#rest").animate({
			   left:"0px",
			    width:"100%"
			    //"left": "200px"
			  }, 1500 );
	    	 $("#sidebar").animate({
			    "left": "-250px"
			  }, 1500 ); 
	    	menu= menu-1;
	    }

	});

  	$("#click").click(function(){
    	 //$("#pageframe").animate({left: '500px'});
    	console.log("in");
    	 $("#pageframe").animate({
	    	// width: "60%",
		    opacity: 0.8,
		   // marginLeft: "-35%",
		    borderWidth: "10px",
		    //"left": "-52%",
		    "right":"93%"
		  }, 1500 );
    	  $("#pageframe1").show("slow");
    	  $("#back1").show();
		});

  	$("#back1").click(function(){
    	 //$("#pageframe").animate({left: '500px'});
    	console.log("out");
    	 $("#pageframe").animate({
	    	//width: "80%",
		    opacity: 1.0, 
		    "top": "100px",
		    "marginLeft": "10%",
		    right:"10%",
		  }, 1500 );

    	  $("#pageframe1").hide("slow");
    	  $("#back1").hide();
    	});
  	$("#back2").click(function(){
    	 //$("#pageframe").animate({left: '500px'});
    	 $("#pageframe1").animate({
	    	position:"absolute",
	    	//width: "80%",
		    opacity: 1.0, 
		    "top": "100px",
		    //"marginLeft": "10%",
		    right:"10%",
		  }, 1500 );

    	  $("#pageframe2").hide("slow");
    	  $("#back2").hide();
    	  $("#pageframe").show();
    }); 

    $("#click2").click(function(){
    	 //$("#pageframe1").animate({left: '500px'});
    	 $("#pageframe2").show("slow");
    	 $("#pageframe").hide();
    	 $("#back2").show();
    	 $("#pageframe1").animate({
	    	//width: "60%",
		    opacity: 0.8,
		    //marginLeft: "-30%",
		    borderWidth: "10px",
		    "right": "92%"
		  }, 1500 );
		});

     $("#home").click(function(){
     	console.log("home")
    	$("#pageframe1").hide();
    	$("#pageframe2").hide();
    	$("#back1").hide();
    	$("#pageframe").show();
    	$("#pageframe").animate({
    		position:"absolute",
	    	width: "80%",
		    opacity: 1.0, 
		    "top": "100px",
		    "marginLeft": "10%",
		    right:"10%",
		  }, 1500 );
    	
    	$("#pageframe1").animate({
    		width: "80%",
		    opacity: 1.0, 
		    "top": "100px",
		    "marginLeft": "10%",
		    right:"10%",
		  }, 1500 );
		
		$("#pageframe2").animate({
				width: "80%",
		    opacity: 1.0, 
		    "top": "100px",
		    "marginLeft": "10%",
		    right:"10%",
		  }, 1500 );
	});


    $("#map").click(function(){
    	 //$("#pageframe").animate({left: '500px'});

    	if (map ==0){
    		one = $("#pageframe").is(":visible"); 
	    	two = $("#pageframe1").is(":visible");
	    	three = $("#pageframe2").is(":visible");
    	    console.log("map ", one);
    	    $("#pageframe").hide("slow");
    	    $("#pageframe1").hide("slow");
    	    $("#pageframe2").hide("slow");
    	    $("#mapframe").show("slow");
    	    map =1;
		}
		else {
			console.log("hide map", one, two, three);
			$("#mapframe").hide("slow");
			if (one) {
				console.log("showing one");
				$("#pageframe").show("slow");
			}
			if (two) {
				$("#pageframe1").show("slow");
			}
			if (three) {
				$("#pageframe2").show("slow");
			}
			map =0;
		}
	});


});



$( document ).keypress(function(event) {
  if ( event.which == 97 ) {
    	 $("#pageframe1").animate({float:"center", "top":"-700px", "left":"100px"})
    	 $("#pageframe1").show();
    	 $("#pageframe").animate({
	    	width: "60%",
		    opacity: 0.8,
		    marginLeft: "-50%",
		    borderWidth: "10px",
		    //"left": "-=200px"
		  }, 1500 );
    	}
});

/*window.onload = function() {
    var jPM = $.jPanelMenu({
	    menu: '#sidebar',
	    trigger: '#menuon'
	});
    jPM.on();
    };
*/
