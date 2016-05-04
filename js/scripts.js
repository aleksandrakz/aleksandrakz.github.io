$(document).ready(function(){
	$("#pageframe1").hide();
	$("#pageframe2").hide();
	$("#back1").hide();

  	$("#click").click(function(){
    	 //$("#pageframe").animate({left: '500px'});
    	console.log("in");
    	 $("#pageframe").animate({
	    	 width: "60%",
		    opacity: 0.8,
		    marginLeft: "-30%",
		    borderWidth: "10px",
		    "left": "-200px"
		  }, 1500 );
    	  $("#pageframe1").show("slow");
    	  $("#back1").show();
		});

  	$("#back1").click(function(){
    	 //$("#pageframe").animate({left: '500px'});
    	console.log("out");
    	 $("#pageframe").animate({
	    	position:"absolute",
	    	width: "80%",
		    opacity: 1.0, 
    		//height: "600px",
		    "top": "100px",
		    "marginLeft": "10%",
		    left:"0%",
		  }, 1500 );

    	  $("#pageframe1").hide("slow");
    	  $("#back1").hide();
    	});
  	$("#back2").click(function(){
    	 //$("#pageframe").animate({left: '500px'});
    	 $("#pageframe1").animate({
	    	position:"absolute",
	    	width: "80%",
		    opacity: 1.0, 
    		height: "600px",
		    "top": "100px",
		    "marginLeft": "10%",
		    left:"0%",
		  }, 1500 );

    	  $("#pageframe2").hide("slow");
    	  $("#back2").hide();
    	  $("#pageframe").show();
    }); 

    $("#click2").click(function(){
    	 //$("#pageframe1").animate({left: '500px'});
    	 $("#pageframe2").show("slow");
    	 $("#pageframe").hide();
    	 $("#pageframe1").animate({
	    	width: "60%",
		    opacity: 0.8,
		    marginLeft: "-30%",
		    borderWidth: "10px",
		    "left": "-200px"
		  }, 1500 );
		});

     $("#home").click(function(){
    	$("#pageframe1").hide();
    	$("#pageframe2").hide();
    	$("#back1").hide();
    	$("#pageframe").show();
    	$("#pageframe").animate({
    		position:"absolute",
	    	width: "80%",
		    opacity: 1.0, 
    		//height: "600px",
		    "top": "100px",
		    "marginLeft": "10%",
		    left:"0%",
		  }, 1500 );
    	
    	$("#pageframe1").animate({
    		width: "80%",
		    opacity: 1.0, 
    		//height: "600px",
		    "top": "100px",
		    "marginLeft": "10%",
		    left:"0%",
		  }, 1500 );
		})
		$("#pageframe2").animate({
				width: "80%",
		    opacity: 1.0, 
    		//height: "600px",
		    "top": "100px",
		    "marginLeft": "10%",
		    left:"0%",
		  }, 1500 );
});

/*window.onload = function() {
    var jPM = $.jPanelMenu({
	    menu: '#sidebar',
	    trigger: '#menuon'
	});
    jPM.on();
 
};*/

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

