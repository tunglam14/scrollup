$(document).ready(function(){
 
$('<a>')
    .attr('class','scrollup')
    .attr('style','display: inline')
    .html('Scrollup')
    .appendTo('body');
 
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else
    {
        $('.scrollup').fadeOut();
    }
});
 
$('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

});