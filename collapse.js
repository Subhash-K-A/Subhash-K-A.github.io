$(document).ready(function(){
    $(".accordion-head > a").click(function(){
        var disp=$(this).parent().next().css("display");
        if(disp== "none"){
            $(".accordion-content:not(:hidden)").slideUp();
            $(this).parent().next().slideDown();
        }
        
        
    })
    
});
