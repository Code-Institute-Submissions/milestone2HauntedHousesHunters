

/* Houses page  */
$(document).ready(function() {
    $(".house1_read").on("click", function() {
        $(".house1").removeClass('highlight_house');
        $(".house2").removeClass('highlight_house');
        $(".house3").removeClass('highlight_house');
        $(".house1").addClass('highlight_house');
   });
   $(".house2_read").on("click", function() {
        $(".house1").removeClass('highlight_house');
        $(".house2").removeClass('highlight_house');
        $(".house3").removeClass('highlight_house');
        $(".house2").addClass('highlight_house');
   });
   $(".house3_read").on("click", function() {
        $(".house1").removeClass('highlight_house');
        $(".house2").removeClass('highlight_house');
        $(".house3").removeClass('highlight_house');
        $(".house3").addClass('highlight_house');
   });
}); 

/* show and hide more text from the houses description*/
$(".moretext").toggle(function(){
    $(this).text("read less..").siblings(".complete").show();    
}, function(){
    $(this).text("read more..").siblings(".complete").hide();    
});