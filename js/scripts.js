$(document).ready(function(){
	$("#pageframe1").hide();
	$("#pageframe2").hide();

	    var myIFrame = document.getElementById('pageframe');
         var myIFDoc  = myIFrame.contentWindow.document;
         var button = myIFDoc.getElementsByName("first");
         console.log(window.frames);
         console.log(myIFDoc);
         console.log(button);

    $(button).click(function(){
    	// $("#pageframe").animate({left: '500px'});
    	alert("clicked");

         $(button).hide();
    	 });

        $("#pageframe1").click(function(){
    	 $("#pageframe1").animate({left: '500px'});
    	 $("#pageframe2").show();
    	 $("#pageframe").hide();
    	 $("#pageframe1").animate({
	    	 width: "60%",
		    opacity: 0.8,
		    marginLeft: "-50%",
		    fontSize: "3em",
		    borderWidth: "10px",
		    "left": "-=200px"
		  }, 1500 );
		});

     $("#home").click(function(){
    	$("#pageframe1").hide();
    	$("#pageframe2").hide();
    	$("#pageframe").show();
    	$(pageframe).animate({
	    	 width: "80%",
		    opacity: 1.0,
		    marginLeft: "10%",
		    fontSize: "3em",
		    borderWidth: "10px",
		    "left": "-=200px"
		  }, 1500 );
    	$("#pageframe1").animate({
    		float:"center",
    		opacity: 1.0,
    		"margin-top": "100px",
		    "margin-bottom": "0px",
		    "margin-left": "50px",
		    "margin-right":"0px"
		})
		$("#pageframe2").animate({
			float:"center",
			opacity: 1.0,
    		"margin-top": "100px",
		    "margin-bottom": "0px",
		    "margin-left": "50px",
		    "margin-right":"0px"
		})
    });
});

window.onload = function() {
    var jPM = $.jPanelMenu({
	    menu: '#sidebar',
	    trigger: '#menuon'
	});
    jPM.on();
 
};

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

