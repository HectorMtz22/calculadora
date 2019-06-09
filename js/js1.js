var inputstring="";
var correct = "";
function updatestring(value) {
	inputstring += value;
	document.calculator.input.value=inputstring;
}

function resultado() {
	correct=eval(inputstring);
	document.calculator.input.value=correct;
}

function borrar() {
	document.calculator.input.value = "";
	inputstring = "";
	correct = "";
	value = "";
}

$(function(){
	if (screen.height < 600) {
		alert("¡Pantalla aún no soportada!");
		$("footer").css("position", "relative");
	}
	else if (screen.width < 720 && screen.height < 700){
		alert("¡Pantalla aún no soportada!");
		$("footer").css("position", "relative");
	}
});

$("form").click(function(){
	$("form").removeClass("form");
	$(":button").removeClass("btncolor");
});

$("form").mouseleave(function(){
	$("form").addClass("form");
	$(":button").addClass("btncolor");
});

$("form").mouseenter(function(){
	$("form").removeClass("form");
	$(":button").removeClass("btncolor");
});
	
$("html").mouseleave(function(){
	$("form").removeClass("form");
	$(":button").removeClass("btncolor");
});

$("html").mouseenter(function(){
	$("form").addClass("form");
	$(":button").addClass("btncolor");
});