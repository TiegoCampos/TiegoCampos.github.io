//os comentários são, ou explicação do/sobre o código, 
//ou são as tentativas falhas
$(document).ready(function(){
	//------------------------------------------------------------------------------------------INICIO FADE
	//------------------------------------------------------------------------------------------ANIMAÇÃO EM CSS
	$('span#fade').css({"opacity":"0"});
	setTimeout(  function(){ $('span#fade').css({"z-index":"-100"}); }, 1500  ); //a animação dura 1.5s

	//------------------------------------------------------------------------------------------BOTÕES DO MENU
	//------------------------------------------------------------------------------------------ANIMAÇÃO EM JQUERY 1 //em vez do toggle usei slides por precisar combinar duas coisas (aside#bestas e section#sobre)
	$('nav#menu ul li a').click(function(){
		$('nav#menu ul li a:not(this)').removeClass('menu_ativo');
		$(this).addClass('menu_ativo');

		if($(this).attr('id') == 'bot_bestas'){ //se clica em bestas, lista desce
			$('aside#bestas').slideDown(500);
		}
		else if($(this).attr('id') == 'bot_sobre'){ //se clica em sobre, lista sobe junto com painel de sobre
			$('aside#bestas').slideUp(500);
			$('section#sobre').css("margin-top","109px");
		}
		else if($(this).attr('id') == 'bot_inicio'){ //se clica em inicio, dá o fade e troca página
			$('span#fade').css({"z-index": "100", "opacity":"1"});
			setTimeout(function(){window.location = "inicio.html";}, 1500);

		}
	})

	//------------------------------------------------------------------------------------------BOTÕES BESTAS
	// $('div#sumario aside#bestas a').click(function(){
	// 	$('div#sumario aside#bestas a:not(this)').removeClass('besta_ativa');
	// 	$(this).addClass('besta_ativa');
	// })

	//------------------------------------------------------------------------------------------SUAVIZADA NA DESCIDA DO ANCHOR LINK
	//------------------------------------------------------------------------------------------EVENTOS - CLICK
	//------------------------------------------------------------------------------------------ANIMAÇÃO EM JQUERY 2
	$(document).on('click', 'a', function(event){
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 1000);
	});

	//------------------------------------------------------------------------------------------EVENTOS - LOAD
	window.onload = function(){
		var audio = new Audio('sounds/retrieval.mp3');
		audio.play();
	}


	//------------------------------------------------------------------------------------------COOKIES
	// function criarCookie(nome, valor, diasExpirar){
	// 	if(diasExpirar){
	// 		var data = new Date();
	// 		data.setTime(data.getTime() + (24 * 60 * 60 * 1000 * diasExpirar));
	// 	}
	// 	document.cookie = nome + "=" + valor + "; expiraEm="+data.toGMTString() + "; path=/";
	// }

	// function lerCookie(nome) {
	//     var procuraNome = nome + "=";
	//     var cookieDecodificado = decodeURIComponent(document.cookie);
	//     var ca = cookieDecodificado.split(';');
	//     for(var i = 0; i < ca.length; i++) {
	//         var c = ca[i];
	//         while (c.charAt(0) == ' ') {
	//             c = c.substring(1);
	//         }
	//         if (c.indexOf(procuraNome) == 0) {
	//             return c.substring(procuraNome.length, c.length);
	//         }
	//     }
	//     return "";
	// }

	// function checarCookie(cookie) {
	//     var besta = lerCookie(cookie);
	// 		console.log(besta);
	//     if (besta != "") { //se o cookie não for uma string vazia
	// 		$('aside#bestas a[href="'+besta+'"]').addClass('besta_ativa');
	//     } else {
	// 		// $('aside#bestas a').click(function(){
	// 		// 	besta = $(this).attr("href");
 	// 	 	//	criarCookie(cookie, besta, 365);
	// 		// })
	//     }
	// }
	// var c, c2;
	// $('aside#bestas a').click(function(){
	// 	c = $(this).attr("href");
	// 	document.cookie = "ultimoClique ="+c+"; expires=365; path=/";

	// 	//c = c.substring(1, c.length);
	// 	c2 = $('article'+c).scrollTop();
	// 	console.log(c2);
	// 	document.cookie = "alturaUltimoClique ="+c2+"; expires=365; path=/";
	// })

	// checarCookie("ultimoClique");
	// checarCookie("alturaUltimoClique");

	function setCookie(cname, cvalue, exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	    var expires = "expires="+d.toUTCString();
	    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
	}

	function checkCookie() {
	    var estadoUsuario = getCookie("estado");

	    if (estadoUsuario != "") {
	        console.log(estadoUsuario);
	    } else {
	        console.log("YOU DIED FOR THE FIRST TIME");
	        estadoUsuario = "YOU ALREADY DIED";

	        if (estadoUsuario != "" && estadoUsuario != null) {
	            setCookie("estado", estadoUsuario, 365);
	        }
	    }
	}

	checkCookie();

	//------------------------------------------------------------------------------------------ANIMAÇÃO EM JQUERY 3
	// function bestaAtual(){
	// 	var topoDoc = $(document).scrollTop();

	// 	$('article').each(function(){
	// 		var topoItem = $(this).offset().top;

	// 		if(topoDoc > topoItem){
	// 			console.log(topoItem);
	// 			$('div#sumario aside#bestas a').addClass('menu_ativo');
	// 		}
	// 	})
	// }

	// bestaAtual();

	$(document).scroll(function(){
		var topoPagina = $(document).scrollTop() - 325; //- 325 é só offset
		var bestaIndex = Math.ceil(topoPagina/650); //650 é o tamanho de cada artigo
		$('div#sumario aside#bestas a').removeClass('besta_ativa');
		$('div#sumario aside#bestas a:eq('+bestaIndex+')').addClass('besta_ativa');
	})

	// var indexBestaAtual = $(window).scrollTop()/650;
	// console.log(indexBestaAtual);
})