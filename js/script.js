// JScript source code

// email sign up 
window.onload = function () {
    $(".hs-form label").attr("style", "color:#c7c6c6;font-family: 'Open Sans', sans-serif; font-size: 14px;");
    $(".hs-input").attr("style", "width:60%;");
    $(".hs_submit").attr("style", "height: 47px; margin-top: -20px;");
    $(".hs-form-required").attr("style", "color: #131313;");
    
};

//fade in content on page load
$(function () {

    $('.container').hide();
    $('.container').fadeIn(3000)
});


$(function () //toggle div
{
    // $(".toggle").click(function() 
    //{  
    //  $(".boxHidden", $(this).parent().parent().parent().next()).slideToggle("slow"); 
    // }); 

    //close divs
    $(".close").click(function () //close button
    {

        $(".showMore").slideToggle("slow", "easeInQuad");

    });

    $(".close2").click(function () //close button
    {

        $(".showContent").slideUp("slow", "easeInQuad");

    });

    $(".close3").click(function () //close button
    {

        $(".teamContent").slideUp("slow", "easeInQuad");

    });
});


//top box -learn more

$(function () {

    function contentSwitcher(settings) {
        var settings = {
            contentClass: '.showMore',
            navigationId: '#topBox'
        };

        //onClick set the active state, 
        //hide the content panels and show the correct one
        $(settings.navigationId).find('a').click(function (e) {
          
            var contentToShow = $(this).attr('href');
            contentToShow = $(contentToShow);
            // $(window).scrollTop($('#topBox').offset().top); sets focus to div

            //dissable normal link behaviour
            e.preventDefault();

            //hide the old content and show the new
            $(settings.contentClass).hide();
            contentToShow.slideToggle("slow", "easeInQuad");
        });
    }
    contentSwitcher();
});


//learn more and work for us

$(function () {

    function contentSwitcher(settings) {
        var settings = {
            contentClass: '.showContent',
            navigationId: '#middle'
        };

        //onClick set the active state, 
        //hide the content panels and show the correct one
        $(settings.navigationId).find('a').click(function (e) {
            var contentToShow = $(this).attr('href');
            contentToShow = $(contentToShow);
            $(window).scrollTop($('#middle').offset().top); //sets focus to div

            //dissable normal link behaviour
            e.preventDefault();

            //hide the old content and show the new
            $(settings.contentClass).hide();
            contentToShow.slideToggle("slow", "easeInQuad");
        });
    }
    contentSwitcher();
});

//who we are div swap

$(function () {

    function contentSwitcher(settings) {
        var settings = {
            contentClass: '.teamContent',
            navigationId: '#bottom'

        };

        //onClick set the active state, 
        //hide the content panels and show the correct one
        $(settings.navigationId).find('a').click(function (e) {
            var contentToShow = $(this).attr('href');
            contentToShow = $(contentToShow);
            
            //dissable normal link behaviour
            e.preventDefault();

            //set active class for active state css
            $(settings.navigationId).find('.teamBox').removeClass('active');
            $(this).find(".teamBox").addClass("active");

            //hide the old content and show the new
            $(settings.contentClass).hide();
            contentToShow.fadeToggle("slow"); 
            $(window).scrollTop($('#footer').offset().top); //sets focus to div
        });

    }
    contentSwitcher();
});


