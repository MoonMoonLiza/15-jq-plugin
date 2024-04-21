//wow js
 wow = new WOW(
        {
   boxClass:     'wow',      // default
   animateClass: 'animated', // default
    offset:       10,          // default
   mobile:       true,       // default
    live:         true        // default
       }
  )
  wow.init();

//jq
$(document).ready(function(){
  //curvedtext
    /**
     * Demo 1
     */
    var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });

    /**
     * Demo 3
     */
    var bezier = function (t)
    {
        var px = [100.0, 350.0, 500.0, 900.0],
            py = [400.0,  50.0, 500.0, 200.0],
            ax = [px[0], 3.0 * (px[1] - px[0]), 3.0 * (px[2] - 2.0 * px[1] + px[0]), px[3] - 3.0 * px[2] + 3.0 * px[1] - px[0]],
            ay = [py[0], 3.0 * (py[1] - py[0]), 3.0 * (py[2] - 2.0 * py[1] + py[0]), py[3] - 3.0 * py[2] + 3.0 * py[1] - py[0]],
            cx = ax[0] + ax[1] * t + ax[2] * t * t + ax[3] * t * t * t,
            cy = ay[0] + ay[1] * t + ay[2] * t * t + ay[3] * t * t * t;

        return {
            x: cx,
            y: cy
        };
    };

    $('#text3').curvedText({
        curve:    bezier,
        domain:   [0.0, 1.0],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 500.0 }
    });


    /**
     * Demo 4
     */
    var spiral = function (t)
    {
        var s = t + 1.0;

        return {
            x: 300.0 + 50.0 * s * Math.cos(2.0 * Math.PI * s - 0.5 * Math.PI),
            y: 300.0 + 50.0 * s * Math.sin(2.0 * Math.PI * s - 0.5 * Math.PI)
        };
    };

    $('#text4').curvedText({
        curve:    spiral,
        domain:   [0.0, 3.0],
        viewport: { x: 0.0, y: 0.0, width: 600.0, height: 600.0 }
    });
  //slick
    $('.wrapper').slick(); 
  //slick2
    $('.wrapper_2').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      speed: 300,


      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

          }
        }
      ]
    }); 
  //lightbox
    lightbox.option({
      'resizeDuration': 500,
      'wrapAround': true
    }) 
  //particles
     var count_particles, stats, update;
      stats = new Stats;
      stats.setMode(0);
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.left = '0px';
      stats.domElement.style.top = '0px';
      document.body.appendChild(stats.domElement);
      count_particles = document.querySelector('.js-count-particles');
      update = function() {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
          count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);   
  //datetimepicker
      $('#filter-date').datetimepicker({
        ownerDocument: document,
        contentWindow: window,
        timepicker:true,
        datepicker:true,
        monthChangeSpinner:true,

       });
  //particle-circles
     Dots.generate({speed: 20000});
  //counterUp
     $('.c_ounter').counterUp({
      delay: 10,
      time: 1000

});
  
   
