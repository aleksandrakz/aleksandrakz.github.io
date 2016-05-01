
$(document).ready(function()
{
   $("#show").click(function(){
       $("#pageframe").hide();
       $("#sidebar").show();
  });
});

window.onload = function() {
    var jPM = $.jPanelMenu({
    menu: '#custom-menu-selector',
    trigger: '#menuon'
});
    jPM.on();
 
};

