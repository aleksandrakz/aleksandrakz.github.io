
$(document).ready(function()
{
   $("#show").click(function(){
       $("#pageframe").hide();
       $("#sidebar").show();
  });
});

window.onload = function() {
    var jPM = $.jPanelMenu({
	    menu: '#sidebar',
	    trigger: '#menuon'
	});
    jPM.on();
 
};

