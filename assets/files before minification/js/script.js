//Document ready (short version)
$(function () {
    // toggle show more button (mobile)
    $( "#mobile-see-more" ).click(function () { 
        $( ".show-more-mobile-1" ).show();
        $( "#mobile-see-more" ).hide(); });
    
    //toggle list (mobile)
    //open
    $( "#hamburger" ).click(function () { 
        $("#close-button").show();
        $("#hamburger").hide();
        $( "#list-mobile" ).show();   
    });
    //open/close dropdown
    $( "#nav-mobile-dropdown" ).click(function () { 
        $( "#dropdown-mobile" ).toggle(); 
    });
    //close menu and dropdown
    $( "#close-button" ).click(function () { 
        $("#close-button").hide();
        $("#hamburger").show();
        $( "#list-mobile" ).hide();
        $( "#dropdown-mobile" ).hide(); 
    });
});