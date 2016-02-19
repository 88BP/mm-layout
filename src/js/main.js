
$(function () { // wait for document ready



		//backgroundTweens

	

		// init controller
		var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 0.3}});

		var bgImg = ('.bgImg');
		TweenMax.set(bgImg,{autoAlpha:0});
	


			var bgTween1 = TweenMax.to('.body', 1, {
			backgroundColor: '#a8216b', 
			ease: Linear.easeNone
			});

			var bgTween2 = TweenMax.to ('.body', 1, {
			backgroundColor: '#2d9598', 
			ease: Linear.easeNone
			});
			
		

			var bgTween3 = TweenMax.to('.body', 1, {
			backgroundColor: '#ea204c', 
			ease: Linear.easeNone
			});

			var bgTween4 = TweenMax.to ('.bgImg', 1, {
			autoAlpha:1 
			});

			
		
		// build scene

		new ScrollMagic.Scene({triggerElement: "#titleTrigger", duration: 700})
					.offset(300)
					.setPin(".titleImg", {spacerClass:"titleSpacer"})
					.addIndicators({name: "title trigger"})
					.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#menuTrigger"})
					.setPin("#menuPin")
					.addIndicators()
					.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 700})
					.setPin("#pin1", {spacerClass:"spacerClass1"})
					.addIndicators({name: "1 (duration: 700)"})
					.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 700})
					.setPin("#pin2")
					.addIndicators({name: "2 (duration: 700)"})
					.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 700})
					.setPin("#pin3")
					.addIndicators({name: "3 (duration: 700)"})
					.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 700})
					.setPin("#pin4")
					.addIndicators({name: "4 (duration: 700)"})
					.addTo(controller);


		new ScrollMagic.Scene({triggerElement: "#bgTrigger1", duration: 300})
					.setTween(bgTween1)
					.addIndicators({name: "bgTrigger1 (duration: 100)"})
					.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#bgTrigger2", duration: 300})
					.setTween(bgTween2)
					.addIndicators({name: "bgTrigger2 (duration: 100)"})
					.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#bgTrigger3", duration: 300})
					.setTween(bgTween3)
					.addIndicators({name: "bgTrigger3 (duration: 100)"})
					.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#bgTrigger4", duration: 300})
					.setTween(bgTween4)
					.addIndicators({name: "bgTrigger4(duration: 100)"})
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







				// var bgTween2 = TweenMax.to($bgImg, 1, {
			// opacity: 1, 
			// ease: Linear.easeNone
			// });





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


