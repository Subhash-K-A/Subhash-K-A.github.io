$(document).ready(() =>{
    let clicked= false;
    $('#menu-icon').click(() =>{
        if(($("#menu-item").css("display")) == "none"){
            $("#menu-item").slideDown().css("display", "flex");
            clicked=true;
        }
        else if(($("#menu-item").css("display")) == "flex"){
            $("#menu-item").slideUp();
            clicked= false;
        }
        console.log(($("#menu-item").css("display")));
    }); 
    
    $(window).resize(() =>{
        console.log(clicked);
        console.log($(window).outerWidth(true));
        if($(window).outerWidth(true) >767.98 ){
            $("#menu-item").css("display", "flex");
        }
        else if( (clicked==false) && ($(window).outerWidth(true) <=767.98) ){
            $("#menu-item").css("display", "none");
        }
    });
});
