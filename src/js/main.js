
$(function () { // wait for document ready



		//backgroundTweens

	

		// init controller
		var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 0.3}});

			var bgTween1 = TweenMax.to('.body', 1, {
			backgroundColor: '#ea204c', 
			ease: Linear.easeNone
			});

			var bgTween2 = TweenMax.to('.body', 1, {
			backgroundColor: '#f9e11b', 
			ease: Linear.easeNone
			});

			var bgTween3 = TweenMax.to('.body', 1, {
			backgroundColor: '#f7db69', 
			ease: Linear.easeNone
			});

			var bgTween4 = TweenMax.to('.body', 1, {
			backgroundColor: '#2d9598', 
			ease: Linear.easeNone
			});
		
		// build scene

		new ScrollMagic.Scene({triggerElement: "#menuTrigger"})
					.setPin("#menuPin")
					.addIndicators()
					.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 700})
					.setPin("#pin1", {spacerClass:"spacerClass1"})
					.setTween(bgTween1)
					.addIndicators({name: "1 (duration: 700)"})
					.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 700})
					.setPin("#pin2")
					.setTween(bgTween2)
					.addIndicators({name: "2 (duration: 700)"})
					.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 700})
					.setPin("#pin3")
					.setTween(bgTween3)
					.addIndicators({name: "3 (duration: 700)"})
					.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 700})
					.setPin("#pin4")
					.setTween(bgTween4)
					.addIndicators({name: "4 (duration: 700)"})
					.addTo(controller);



		new ScrollMagic.Scene({triggerElement: "#sec1", duration: 1000})
					.setClassToggle("#high1", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
		new ScrollMagic.Scene({triggerElement: "#sec2", duration: 1000})
					.setClassToggle("#high2", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
		new ScrollMagic.Scene({triggerElement: "#sec3", duration: 1000})
					.setClassToggle("#high3", "active") // add class toggl
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
		new ScrollMagic.Scene({triggerElement: "#sec4", duration: 1000})
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


