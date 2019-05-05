console.log("Connected!");

//  Toggle class for line-through and  gray font
$("ul").on("click", "li", function () {
	$(this).toggleClass("completed")
});

// Click on x to delete Todos
$("ul").on("click", "span", function (event) {
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
	event.stopPropagation();
});

// Listener for Enter keypress on Input tag
$("input[type='text']").keypress(function (event) {
	if (event.which === 13) {
		// Grabbing new todo text from input
		var todoText = $(this).val();
		$(this).attr('color', 'rgb(128, 128, 128)');
		// Clear text input
		$(this).val(" ");
		// create  a new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

// fade out text-input on plus click
$("h1").on("click", ".fa-plus", function () {
	$("input[type='text']").fadeToggle();
});