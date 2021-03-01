           /* resizes */
  $(window).on("resize" , function(){
            var wide  = $(window).width() ,
                hei   =$(window).height();
                console.log(wide,hei);
                if (wide < 1000) {
                 $("div").addClass("hidden");
                }
                else {
                 $("div").removeClass("hidden");
                }
  }); 
            /*Slide up , Slide down , Slide Toggle*/
            
/*$(document).ready(function(){
        $(".cl").mouseenter(function(){
            $(".navbar").slideDown(1000); 
            
          });
      }); 
$(document).ready(function(){
        $("body:not(.cl)").mouseenter(function(){
            $(".navbar").hide(500);
            
          });
      }); */
            
             /* Dealing with CSS classes (addClass() , remove ()) */
$(document).ready(function()
                  {
                     $("ul,a").click(function()
                                       {
                         $(this).addClass("chooseli");
                                       });
                  });

             /* On Click (function(){ $().click(function(){$()} */

$(document).ready(function()
      {
      
       $(".contactMe").click(function()
                        {
                         $(".contactMe").hide();
                        });
    
                        });
         /* JeQ .Html append x appendTo, prepend x prependTo , after , before */
$(document).ready(function(){
   $(".readMore").one("click",function(){
      $(".intro").append("<p style='color:#fff;'>we can do any thing you want </p>");
                        });
});
         /* JeQ . Html Remove/Embty Element */
$(document).ready(function(){
      $(".readMore").dblclick(function(){
     $(".intro").remove("p");});
     });
  
        /*    hover(function(){},function(){}) */
$(document).ready(function()
      {
       $(".contactMe").hover(function()
                        {
                         $(".contactMe").css("color","#A7D0FF");
                        } ,
                       function()
                        {
                         $(".contactMe").css("color","#000");
                        });
      });
                        
/* hide(speed,call) , show(speed,call) , toggle (speed,call)*/
/*$(document).ready(function()
                  {$(".active").click(function()
                                      {$("q").hide(200,function()
                                                        {$(".esraa").show(200);
                                                        });
                                      });
                  });
$(document).ready(function()
                  { $(".ana").click(function()
                                {$("q").hide(200,function()
                                             { $(".anas").show();});
                                });
                  });
$(document).ready(function()
                  {$(".test").click(function()
                                      {$("q").hide(200,function()
                                                        {$(".ahmed").show(200);
                                                        });
                                      });
                  });
$(document).ready(function()
                  {$(".abee").click(function()
                                      {$("q").hide(200,function()
                                                        {$(".abeer").show(200);
                                                        });
                                      });
                  }); */
$(document).ready(function(){
         
 });
               
/* Fade in , Fade out , Fade to , Fade Toggle */
$(document).ready(function(){
      $(".my-skills").fadeIn(1000);
});


/* animate ({Css} , Speed , Callback ) */
$(document).ready(function()
                  {
                   $(".progress").animate({
                     width:"50%"},2000
                               );
                  });

 /* HTML Dimenesions (width(),innerWidth(),outerWidth(),height(),innerHeight(),outerHeight()) */
$(document).ready(function() {
   $("textarea").click(function(){
      $(this).height("+="+50);
      if ($(this).height() == 235) {
          $(this).css(
                     {
            maxHeight:'235px'
            });
         console.log("You can't add width more than " + $(this).height() + "px");
      }
   });
   });


// Event map with (on) multi event
 $ (".map").on({
   click : function () {$(this).text("You have clicked me.");},
   dblClick : function () {$(this).text("You have double clicked me.");},
   mouseenter :function() { $(this).text("You have mouse in me.");},
   mouseleave : function() {$(this).text("The mouse has gone away");}
    });
 // KeyUp KeyDown KeyPress change
    
 $("div input").on("keyup" , function(){
  $("div p").text($(this).val());
 });

 
 $("select").on("change", function(){
                  $(".select").text("You have choosed "+$(this).val());
                });
 
 // select
  $("p").on("click", function(){
   $(this).select();
  });
 