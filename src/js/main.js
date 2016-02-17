// console.log('main.js');

$('#sidebar').affix({
      offset: {
        top: 245
      }
});

var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;

$body.scrollspy({
	target: '#leftCol',
	offset: navHeight
});

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: $('section').height(),
    triggerHook: .025,
    reverse: true
  }
});

var scene1 = new ScrollMagic.Scene({ triggerElement: '#intro' })
								.setClassToggle('#intro-anchor', 'active')
								.addTo(controller);
var scene2 = new ScrollMagic.Scene({ triggerElement: '#section-1' })
								.setClassToggle('#anchor1', 'active')
								.addTo(controller);
var scene3 = new ScrollMagic.Scene({ triggerElement: '#section-2' })
								.setClassToggle('#anchor2', 'active')
								.addTo(controller);
var scene4 = new ScrollMagic.Scene({ triggerElement: '#section-3' })
								.setClassToggle('#anchor3', 'active')
								.addTo(controller);

// Change behaviour of controller
// to animate scroll instead of jump
controller.scrollTo(function(target) {

  TweenMax.to(window, 0.5, {
    scrollTo : {
      y : target,
      autoKill : true // Allow scroll position to change outside itself
    },
    ease : Cubic.easeInOut
  });

});


//  Bind scroll to anchor links
$(document).on("click", "a[href^=#]", function(e) {
  var id = $(this).attr("href");

  if($(id).length > 0) {
    e.preventDefault();

    // trigger scroll
    controller.scrollTo(id);

    // If supported by the browser we can also update the URL
    if (window.history && window.history.pushState) {
      history.pushState("", document.title, id);
    }
  }

});

// 	//init animation for .5 seconds 
// 	var tween = TweenMax.to('#animation', 0.5, {
//     backgroundColor: 'rgb(255, 39, 46)',
//     scale: 7,
//     rotation: 360
		
// 	});

// 	// Create the Scene and trigger when visible with ScrollMagic
// 	var scene = new ScrollScene({
//     triggerElement: '#scene',
//     offset: 150 /* offset the trigger 150px below #scene's top */
// 	})

// 	.setTween(tween)
// 	.addTo(scrollMagicController);

// 	// Add debug indicators fixed on right side
//    	scene.addIndicators();


// });

// init controller
	// var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});

	// // build scenes
	// new ScrollMagic.Scene({triggerElement: "#sec1"})
	// 				.setClassToggle("#high1", "active") // add class toggle
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);
	// new ScrollMagic.Scene({triggerElement: "#sec2"})
	// 				.setClassToggle("#high2", "active") // add class toggle
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);
	// new ScrollMagic.Scene({triggerElement: "#sec3"})
	// 				.setClassToggle("#high3", "active") // add class toggle
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);
	// new ScrollMagic.Scene({triggerElement: "#sec4"})
	// 				.setClassToggle("#high4", "active") // add class toggle
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);

