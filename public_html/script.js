$(function(){
         //seleciona a classe icone, hover pq vai usar as duas animações
	$('.icone').hover(function(){
            //quando o mouse ficar em cima do icone aumenta ele
		$(this).animate({
			"width":100,
			"height":100,
			"margin-top":-30
		}, 200);
	}, function(){
            //quando o mouse sair ele volta a propriedade atual
		$(this).animate({
			"width":70,
			"height":70,
			"margin-top":0
		}, 200);
	});

});