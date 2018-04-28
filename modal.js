$(document).ready( () => {
    $('#launch').click(()=>{
        $("#main-flex").animate({opacity: "0.2"});
        $('html,body').addClass('removeScroll');
        $("#modal").css("display", "block");
        $("#modal-content").slideDown();
        $("#modal").animate({paddingTop: "10vh"});
    });

    $('html').click((e)=>{
        console.log(e.target);
        console.log(e.target.getAttribute('id')); 
    });

    $(this).click((event)=>{
        if ((event.target == modal) || (event.target == cross)) {
            $("#modal-content").slideUp();
            $("#modal").css("display", "none");
            $('html,body').removeClass('removeScroll');
            $("#main-flex").animate({opacity: "1"});
        }
    })

    $('#close').click(()=>{
        $("#modal-content").slideUp();
        $("#modal").css("display", "none");
        $('html,body').removeClass('removeScroll');
        $("#main-flex").animate({opacity: "1"});
    });
});


