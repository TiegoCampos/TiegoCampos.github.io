$(document).ready(function(){
	//------------------------------------------------------------------------------------------INICIO FADE
	//------------------------------------------------------------------------------------------ANIMAÇÃO EM CSS
	$('span#fade').css({"opacity":"0"});
	setTimeout(  function(){ $('span#fade').css({"z-index":"2"}); }, 1500  ); //a animação dura 1.5s

	var verificaSeJaClicou = false;

	$('#personagem_clique').click(function(event){
		event.preventDefault();

		if (!verificaSeJaClicou) {
			verificaSeJaClicou = true;
			fazAnimacao();
		}
	})

	function fazAnimacao() {
		$('div#gameplay img#personagem_clique').css("z-index","-1");
		$('#voce_morreu').css("opacity","1");
		$('#voce_morreu_texto').css("opacity","0.8");
		$('#gameplay img').css("filter","grayscale(100%)");

		var audio = new Audio('sounds/youdied.mp3');
		audio.play();

		setTimeout(fazFadeTrocaPagina, 5500); //a animação no css dura 5s, deixei 0.5s de offset pra dar o fade
	}

	function fazFadeTrocaPagina(){
		$('span#fade').css({"z-index": "100", "opacity":"1"});
		setTimeout(  function(){window.location = "bestas.html";}, 1500  );
	}

	// function fazFade() {
	// 	$('span#fade').css({"opacity":"1", "z-index":"3"});
		
	// 	setTimeout(trocaPagina, 1500); //a animação dura 1.5s
	// }

	// function trocaPagina() {
	// 	newLocation = "bestas.html";
	// 	window.location = newLocation;
	// }
})