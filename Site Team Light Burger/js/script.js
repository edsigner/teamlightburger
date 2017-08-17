
$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
	function escuro(){
		Materialize.toast('Você alterou para o modo escuro', 2000)
	}
	function claro(){
		Materialize.toast('Você alterou para o modo claro', 2000)
	}
	
	
    $('.modal').modal();
	$(".button-collapse").sideNav();
	
	$('.slider').slider();
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$('.carousel').carousel();
	$('select').material_select();
	$('.tooltipped').tooltip({delay: 50});
	 $('.tap-target').tapTarget('open');
	$('#topo').click(function(){
		$('body').animate({
			scrollTop: 0
		}, 1500);
		
	});
	
	
	$('#pedido')
		.click(function(){
					
					$('#h5')
					
						.text('A Team Light Burger agradece pela preferência!');
						
					$('#comida')
					
						.hide();
					$('#pedido')
						.text('Fechar')						
						
						
							
				});
				
	$('#escuro')
		.click(function(){
			$('footer').addClass('blue-grey darken-4')
			$('.btnEsc').addClass('amber black-text')
			$('.btnEsc1').addClass('black-text')
			$('.textEsc').addClass('amber-text')
			$('.escuro').addClass('blue-grey darken-4')
			$('.nav-extended').addClass('blue-grey darken-4')
			$('.tabs').addClass('blue-grey darken-4')
			$('.escuro1').addClass('blue-grey darken-3 white-text')
			$('body').addClass('blue-grey darken-4')
			$('#promo').attr("src", "img/promo.png")
			$('#logo').attr("src", "img/logo1.png");
	});
	$('#claro')
		.click(function(){
			$('footer').removeClass('blue-grey darken-4')
			$('.btnEsc').removeClass('amber black-text')
			$('.btnEsc1').removeClass('black-text')
			$('.textEsc').removeClass('amber-text')
			$('.escuro').removeClass('blue-grey darken-4')
			$('.nav-extended').removeClass('blue-grey darken-4')
			$('.tabs').removeClass('blue-grey darken-4')
			$('.escuro1').removeClass('blue-grey darken-3 white-text')
			$('body').removeClass('blue-grey darken-4')
			$('#promo').attr("src", "img/promo1.png")
			$('#logo').attr("src", "img/logo.png");
	});
						
	$('input.autocomplete').autocomplete({
    data: {
      "X-Bacon": 'img/xbacon.png',
      "X-Burger": 'img/xburger.png',
      "X-Salada": 'img/xsalada.png'
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
  
 });
     