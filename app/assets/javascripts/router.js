$(document).ready(function () {
	var routes = {
		"click_counter": clickCounter,
		"one_page": onePage,
		"make_a_dude": makeADude,
		"keep_it_up": keepItUpGame,
		"view_graph": viewGraph,
		"king_of_comments": kingOfComments,
		"pixshow": pixShow,
		"your_space": yourSpace,
		"hangman": hangmanGame,
		"pv_calculator": pvCalculator,
		"tiny_notes": tinyNotes,
		"capture": captureGame,
		"text_scroller": textScroller,
		"hollywood": hollywoodSign,
		"liquor_likes": liquorLikes,
		"fishy_friend": fishyFriend,
		"snare": snare,
		"quick_words": quickWords,
		"countdown": countdownClock,
		"hourglass": hourglass,
		"skinny_drinks": skinnyDrinks,
		"pinwheel": pinwheel,
		"typing_test": typingTest,
		"swivel": swivelGame,
		"mastermind": mastermindGame,
		"sparklers": sparklers,
		"postbored": postbored,
		"text_to_braille": textToBraille,
		"no_one_watching": noOneWatching,
		"tos": tos,
		"song_machine": songMachine,
		"globulator": globulator,
		"drying_paint": dryingPaint,
		"word_clock": wordClock,
		"emergency_off": emergencyOff,
		"infinite_descent": infiniteDescent,
		"wish": wish,
		"serious_question": seriousQuestion,
		"algae_tank": algaeTank,
		"colorworks": colorWorks,
		"effects": effects,
		"down_the_weight": downTheWeight,
		"check_sketch": checkSketch,
		"window_sizer": windowSizer,
		"image_palette": imagePalette,
		"splodin_bacon": splodinBacon,
		"glob_glob": globGlob,
		"forest": forest
	};
	var route = window.location.pathname.replace(/^\//, '').replace(/\/.*/, '');
	routes[route]();
});