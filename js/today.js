// JavaScript Document

$(document).ready(function(){	
	
	$(".menu").click(function(){ 
		$("nav").slideToggle();
	});


	$(window).on('load resize',function(){
			var a_w = document.body.clientWidth;
			if(a_w >= 768) $("nav").show(); 
			else $("nav").hide();
		}
	);
	
	$(".fancybox").fancybox({
		openEffect	: 'fade', // 'elastic', 'fade', 'none'
		closeEffect	: 'fade'
	});
	
	$("#s2").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside' // 'fade', 'inside', 'outside'
    		}
    	}
    });
});
