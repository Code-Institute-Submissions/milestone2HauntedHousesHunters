/* Houses page  */
$(document).ready(function() {
    $(".house1_read").on("click", function() {
        $(".house1").removeClass('highlight_stream');
        $(".house2").removeClass('highlight_stream');
        $(".house3").removeClass('highlight_stream');
        $(".house1").addClass('highlight_stream');
   });
   $(".house2_read").on("click", function() {
        $(".house1").removeClass('highlight_stream');
        $(".house2").removeClass('highlight_stream');
        $(".house3").removeClass('highlight_stream');
        $(".house2").addClass('highlight_stream');
   });
   $(".house3_read").on("click", function() {
        $(".house1").removeClass('highlight_stream');
        $(".house2").removeClass('highlight_stream');
        $(".house3").removeClass('highlight_stream');
        $(".house3").addClass('highlight_stream');
   });
}); 

/* show and hide more text from the houses description*/
$(".moretext").toggle(function(){
    $(this).text("read less..").siblings(".complete").show();    
}, function(){
    $(this).text("read more..").siblings(".complete").hide();    
});