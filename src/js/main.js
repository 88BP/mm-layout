
$(function () { // wait for document ready

		// init controller
		var controller = new ScrollMagic.Controller();
		
		// build scene


		// var scene = new ScrollMagic.Scene({triggerElement: "#pin2"})
		// 				.setPin("#pin2")
		// 				.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
		// 				.addTo(controller);


		new ScrollMagic.Scene({triggerElement: "#sec1", duration: 500})
					.setClassToggle("#high1", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
		new ScrollMagic.Scene({triggerElement: "#sec2", duration: 500})
					.setClassToggle("#high2", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
		new ScrollMagic.Scene({triggerElement: "#sec3", duration: 500})
					.setClassToggle("#high3", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
		new ScrollMagic.Scene({triggerElement: "#sec4", duration: 500})
					.setClassToggle("#high4", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
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

