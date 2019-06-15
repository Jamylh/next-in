      // Menu-toggle button

      $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
               
                  $('nav').addClass('black');
                 $('.img-logo').attr('src','images/next-in.png');
               
                
                
            }

            else {
                  $('nav').removeClass('black');
                $('.img-logo').attr('src','images/next-in%20copy.png');
               
            }
          
 
      })
