$(document).ready(function(){
	$("#pageframe1").hide();
	$("#pageframe2").hide();

    $("#home").click(function(){
    	 $("#pageframe").animate({left: '500px'});
    	 $("#pageframe1").show();
    	 $(pageframe).animate({
	    	 width: "60%",
		    opacity: 0.8,
		    marginLeft: "-50%",
		    fontSize: "3em",
		    borderWidth: "10px",
		    "left": "-=200px"
		  }, 1500 );
		});

        $("#pageframe1").click(function(){
    	 $("#pageframe1").animate({left: '500px'});
    	 $("#pageframe2").show();
    	 $("#pageframe").hide();
    	 $(pageframe1).animate({
	    	 width: "60%",
		    opacity: 0.8,
		    marginLeft: "-50%",
		    fontSize: "3em",
		    borderWidth: "10px",
		    "left": "-=200px"
		  }, 1500 );
		});

     $("#map").click(function(){
    	$("#pageframe1").hide();
    	$(pageframe).animate({
	    	 width: "80%",
		    opacity: 1.0,
		    marginLeft: "10%",
		    fontSize: "3em",
		    borderWidth: "10px",
		    "left": "-=200px"
		  }, 1500 );
    });
});

window.onload = function() {
    var jPM = $.jPanelMenu({
	    menu: '#sidebar',
	    trigger: '#menuon'
	});
    jPM.on();
 
};

