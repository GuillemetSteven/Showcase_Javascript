var qS = id => document.querySelector("#"+id);
var effacer = t => t.value='';
var affSol = (n, l=0) => {
	var ext = ["","p","a"][l];
	var e = qS("s"+n+ext).style.display; qS("s"+n+ext).style.display = e =="block" ? "none" : "block"};


// Exercice EUR vers FRANCS
var enFrancs = e => {qS("r101").innerHTML = (e.value*6.56).toFixed(2) + ' Francs';}

// Exercice Aire d'un disque
var aire = r => {qS("r102").innerHTML = (r.value * r.value * Math.PI).toFixed(2);}

// Parc d'attraction

var parc = () => qS('r401').innerHTML = qS('age401').value != '' ? 
						prgm_parc(qS('age401').value, qS('adulte401').checked) : ''

var prgm_parc=(age,adulte) => 
		age>=13 || adulte ? "Bonne journée !" : "Entrée interdite !"

// Vieux listing
var acronyme = e => {qS("r1201").innerHTML = e.value.toUpperCase().split(" ").map(mot => mot[0]).join(".") ;}

// Exercice Contamination
var contamination = () => {
	 var t = qS("t201").value
	 var v = qS("v201").value
	qS("r201").innerHTML = v.repeat(t.length);}

// Exercice Pourboire selon la note
var pourboire = () => {
	var t = qS('t099').value
	var v = qS("v099").value
	qS("r099").innerHTML = (t!='' ? Math.ceil(t*{'TB':1.1, 'B':1.05, 'nul':1, 'vide':0}[v]) : '') + ' Euros';}

// Exercice Carte de crédit
var masquer = r => {
 var c = r.value
 qS("r202").innerHTML = c.length < 4 ? c : "#".repeat(c.length-4) + c.slice(-4)
}


// Darkmode/lightmode
function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
  }


;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};




	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	

	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	
	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};


	$(function(){
		contentWayPoint();
		
		goToTop();
		loaderPage();
		parallax();
	});


}());
