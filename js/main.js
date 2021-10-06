$(document).ready(function(){
  // typed js
  $(".typed").typed({
		strings: ["Web Designer.", "Wordpress Developer."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed:50,
		// time before typing starts
		startDelay: 500,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 200,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});


  //    particle js start

    /* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 400
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 4,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 170,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 300,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
// venobox js
$('.venobox').venobox({

  framewidth : '1000px',                            // default: ''
    frameheight: '500px',                            // default: ''
    border     : '2px',                             // default: '0'
    bgcolor    : '#000',                          // default: '#fff'
    titleattr  : 'data-title',                       // default: 'title'
    numeratio  : true,                               // default: false
    infinigall : true,                               // default: false
});

// back back-to-top
 $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back_top').fadeIn();
    } else {
      $('.back_top').fadeOut();
    }
  });

  $('.back_top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    },2000);
    return false;
  });
  
  // navbar part js

    //    stickytop menu
    $(window).scroll(function(){
       var scrolling=$(this).scrollTop();
        var sticky=$('.sticky_top');
        if(scrolling>50){
            sticky .addClass('menu_bg');
        }
        else{
              sticky .removeClass('menu_bg');
        }
    });
    
    // Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 150});

 var html_body = $('html, body');
 $('nav a').on('click', function () {
     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
             html_body.animate({
                 scrollTop: target.offset().top - 50
             }, 2000);
             return false;
         }
     }
 });
 // wow js
 new WOW().init();

 //    preloader js
     $(window).on('load',function(){
         $('.loader').delay(1500).fadeOut(1500);
     });

     // Skills
   $('.skill').waypoint(function () {
       $('.progress .progress-bar').each(function () {
           $(this).css("width", $(this).attr("aria-valuenow") + '%');
       });
   }, {offset: '80%'});


     // navbar colspan js
 $(".nav-link").on("click", function(){
   $(".navbar-collapse").collapse("hide");
 });


});
