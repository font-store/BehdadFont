       $(document).ready(function () {

           $("#propertis .owl-carousel").owlCarousel({
               // autoPlay: true,
               // stopOnHover: true,
               // slideSpeed: 200,
               // paginationSpeed: 800,
               // rewindSpeed: 1000,
               // navigationText: ["prev", "next"],
               // rewindNav: true,
               // singleItem: true,
               // transitionStyle: "backSlide",
               // responsive: true,
               // responsiveRefreshRate: 200,
               // responsiveBaseWidth: window,
               rtl: true,

               items: 1,
               autoplay: 1000,
               smartSpeed:200,
               //nav: false,

               animateIn: 'bounceInRight',
               animateOut: 'bounceOutLeft',
               //responsive: true,
               loop: true,
               
               responsiveBaseElement: window
           });



       });