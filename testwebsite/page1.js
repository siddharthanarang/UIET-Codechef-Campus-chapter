 $(document).ready(function(){
       var tmp1=1 ;
         $("#res").click(function(){
            
            $("#resource_open2").hide(1000);
        $("#resource_open3").hide(1000);
        $("#lecture_open1").hide(1000);
        $("#lecture_openba").hide(1000);
        $("#lecture_openad").hide(1000);
        $(".wb").hide(1000);
         $(".about_open").hide(1000);
         $(".contact-open").hide(1000);
         $(".quiz-open").hide(1000);
        if (tmp1==1) {
                        $("#resource_open1").show(1000);
                        tmp1=0 ;
                             $(".slider").css("z-index","-1").css("opacity",".5") ;
                }
                else{
                        $("#resource_open1").hide(1000);
                        tmp1=1 ;
                        $(".slider").css("z-index","-1").css("opacity","1") ;
                }
        
        /*$("#lecture_openwb1").hide(1000);
        $("#lecture_openwb2").hide(1000);
        $("#lecture_openwb3").hide(1000);
        $("#lecture_openwb4").hide(1000);
        $("#lecture_openwb5").hide(1000);
         $("#lecture_openwa1").hide(1000);
          $("#lecture_openwa2").hide(1000);
           $("#lecture_openwa3").hide(1000);
            $("#lecture_openwa4").hide(1000);
             $("#lecture_openwa5").hide(1000);*/
        
         
        
          });
        $("#res_open1").click(function(){
             $("#resource_open3").hide(500);
          $("#resource_open2").toggle(1000);
          
        });
         $("#res_open2").click(function(){
             $("#resource_open2").hide(500);
          $("#resource_open3").toggle(1000);
         
        });
         var tmp2=1 ;
        $("#lec").click(function(){
            $("#lecture_openba").hide(1000);
           $("#lecture_openad").hide(1000);
           $(".wb").hide(1000);
          $("#resource_open1").hide(1000); 
        $("#resource_open2").hide(1000);
        $("#resource_open3").hide(1000);
         
         $(".about_open").hide(1000);
         $(".contact-open").hide(1000);
         $(".quiz-open").hide(1000);
         if (tmp2==1) {
                        $("#lecture_open1").show(1000);
                        tmp2=0 ;
                             $(".slider").css("z-index","-1").css("opacity",".5") ;
                }
                else{
                        $("#lecture_open1").hide(1000);
                        tmp2=1 ;
                        $(".slider").css("z-index","-1").css("opacity","1") ;
                }
         
                          
        });
        $("#basic1").click(function(){
             
            $("#lecture_openad").hide(1000);
                 $(".wb").hide(1000);
                  $("#lecture_openba").toggle(1000);
         
          
            
        });
         $("#advanced1").click(function(){
          
          $("#lecture_openba").hide(1000);
           
                          $(".wb").hide(1000);
                          $("#lecture_openad").toggle(1000);
         
          
        });
        
         $("#wb1").click(function(){
            $(".wb").hide(500);
          $("#lecture_openwb1").toggle(1000);
          
        });
         $("#wb2").click(function(){
            $(".wb").hide(500);
          $("#lecture_openwb2").toggle(1000);
          
        });
         $("#wb3").click(function(){
            $(".wb").hide(500);
          $("#lecture_openwb3").toggle(1000);  
        });
         $("#wb4").click(function(){
            $(".wb").hide(500);
          $("#lecture_openwb4").toggle(1000);  
        });
         $("#wb5").click(function(){
            $(".wb").hide(500);
          $("#lecture_openwb5").toggle(1000);  
        });
         $("#wa1").click(function(){
            $(".wb").hide(500);
          $("#lecture_openwa1").toggle(1000);  
        });
         $("#wa2").click(function(){
            $(".wb").hide(500);
          $("#lecture_openwa2").toggle(1000);  
        });
         $("#wa3").click(function(){
            $(".wb").hide(500);
          $("#lecture_openwa3").toggle(1000);  
        });
         $("#wa4").click(function(){
            $(".wb").hide(500);
          $("#lecture_openwa4").toggle(1000);  
        });
         $("#wa5").click(function(){
            $(".wb").hide(500);
          $("#lecture_openwa5").toggle(1000);  
        });
         $(document).ready(function(){
      
         $("#res").mouseover(function(){
            $("#res").css("color","tomato").css("background","lemonchiffon") ;
             $(".a").css("color","darkred").css("background","lightsalmon") ;
         });
         $("#res").mouseout(function(){
            $("#res").css("color","").css("background","") ;
         $(".a").css("color","").css("background","") ;
         });
         
        });
         $(document).ready(function(){
         $("#lec").mouseover(function(){
            $("#lec").css("color","tomato").css("background","lemonchiffon") ;
             $(".b").css("color","darkred").css("background","lightsalmon") ;
         });
         $("#lec").mouseout(function(){
            $("#lec").css("color","").css("background","") ;
         $(".b").css("color","").css("background","") ;
         });
         
        });
         $(document).ready(function(){
         $("#contact").mouseover(function(){
            $("#contact").css("color","tomato").css("background","lemonchiffon") ;
             $(".e").css("color","darkred").css("background","lightsalmon") ;
         });
         $("#contact").mouseout(function(){
            $("#contact").css("color","").css("background","") ;
         $(".e").css("color","").css("background","") ;
         });
         
        });
         $(document).ready(function(){
         $("#about").mouseover(function(){
            $("#about").css("color","tomato").css("background","lemonchiffon") ;
             $(".d").css("color","darkred").css("background","lightsalmon") ;
         });
         $("#about").mouseout(function(){
            $("#about").css("color","").css("background","") ;
         $(".d").css("color","").css("background","") ;
         });
         
        });
         $(document).ready(function(){
         $("#quiz").mouseover(function(){
            $("#quiz").css("color","tomato").css("background","lemonchiffon") ;
             $(".c").css("color","darkred").css("background","lightsalmon") ;
         });
         $("#quiz").mouseout(function(){
            $("#quiz").css("color","").css("background","") ;
         $(".c").css("color","").css("background","") ;
         });
         
        });
          var tmp4=1 ;
         $("#about").click(function(){
            $("#resource_open1").hide(1000);
        $("#resource_open2").hide(1000);
        $("#resource_open3").hide(1000);
        $("#lecture_open1").hide(1000);
        $("#lecture_openba").hide(1000);
        $("#lecture_openad").hide(1000);
        $(".wb").hide(1000);
        $(".contact-open").hide(1000);
         $(".quiz-open").hide(1000);
       if (tmp4==1) {
                        $(".about_open").show(1000);
                        tmp4=0 ;
                             $(".slider").css("z-index","-1").css("opacity",".5") ;
                }
                else{
                        $(".about_open").hide(1000);
                        tmp4=1 ;
                        $(".slider").css("z-index","-1").css("opacity","1") ;
                }
        
        
         
        
        });
          var tmp5=1 ;
         $("#contact").click(function(){
            $("#resource_open1").hide(1000);
        $("#resource_open2").hide(1000);
        $("#resource_open3").hide(1000);
        $("#lecture_open1").hide(1000);
        $("#lecture_openba").hide(1000);
        $("#lecture_openad").hide(1000);
        $(".wb").hide(1000);
        $(".about_open").hide(1000);
         $(".quiz-open").hide(1000);
                if (tmp5==1) {
                        $(".contact-open").show(1000);
                        tmp5=0 ;
                             $(".slider").css("z-index","-1").css("opacity",".5") ;
                }else{
                        $(".contact-open").hide(1000);
                        tmp5=1 ;
                        $(".slider").css("z-index","-1").css("opacity","1") ;
                }
                 
        
   
        
        });
         
          $(".contact-li-a").mouseover(function(){
            $(".contact-li-a").css("background","#3c5a9b") ;
             $(".contact-li-a ").css("color","white") ;
             $(".contact-li-a i ").css("color","white") ;
         });
        $(".contact-li-a").mouseout(function(){
            $(".contact-li-a").css("background","white") ;
             $(".contact-li-a ").css("color","black") ;
             $(".contact-li-a i ").css("color","#3c5a9b") ;
         });
        $(".contact-li-b").mouseover(function(){
            $(".contact-li-b").css("background","#3c5a9b") ;
             $(".contact-li-b ").css("color","white") ;
             $(".contact-li-b i ").css("color","white") ;
         });
        $(".contact-li-b").mouseout(function(){
            $(".contact-li-b").css("background","white") ;
             $(".contact-li-b ").css("color","black") ;
             $(".contact-li-b i ").css("color","#3c5a9b") ;
         });
        $(".contact-li-c").mouseover(function(){
            $(".contact-li-c").css("background","orange") ;
             $(".contact-li-c ").css("color","white") ;
             $(".contact-li-c i ").css("color","white") ;
         });
        $(".contact-li-c").mouseout(function(){
            $(".contact-li-c").css("background","white") ;
             $(".contact-li-c ").css("color","black") ;
             $(".contact-li-c i ").css("color","orange") ;
         });
        
        
        
         
       /*  $('#res').mouseover(function(){
    $('#res').hoverwords({ delay:50 });            
});*/
       });                                           