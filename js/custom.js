$(window).on('load', function(){

	$('body').removeClass('loaded');
});

$(function(){
	
	

	$(".dropdown-button").on('click', function(){
	    $(this).parent().toggleClass("is-open");
	});

	$(document).click( function(event){
      if( $(event.target).closest(".dropdown").length ) 
        return;
      
	  $('.dropdown').removeClass("is-open");

      event.stopPropagation();
    });

    $(".colors-list__item").on('click',function(){
        
        var el = $(this);
        var elNext = $(this).parents('.colors-list').next();
        var elData = $(this).data('toggle');

        $(this).parents('.colors-wrap').find('.colors-list__item').not(el).removeClass('is-active')
        $(this).parents('.colors-wrap').find('.sub-colors-list').not(elData).hide(200);
        $(this).parents('.colors-wrap').find('.sub-colors-list' + elData ).slideToggle(200);

        el.toggleClass('is-active');

    });

    $(".sub-colors-list__item").on('click',function(){
        
        var el = $(this);
        $(this).parents('.colors-wrap').find('.sub-colors-list__item').removeClass('is-active')
        el.toggleClass('is-active');

    });



	/* Tabs */
	/* ---------------------------------------------- */
    var click = 1;
	$('.tabs a').on('click', function(){
        var el = $(this);
        var elData = $(this).parents('.tab-wrap').find('.first');
        var id = $(this).attr('href');

        $(this).parents('.tab-wrap').find('.tabs a').not(el).parent().removeClass('is-active')
		// $(this).parents('.tab-wrap').find('.tab-cont').addClass('is-hidden');
        $(this).parents('.tab-wrap').find('.tab-cont').not(id).addClass('is-hidden')
        $(this).parents('.tab-wrap').find('.tab-cont' + id).toggleClass('is-hidden')
       
		el.parent().toggleClass('is-active');
        
        
        if($(this).parents('.tab-wrap').find('.tab-cont' + id).hasClass('is-hidden')) {
            $('.tab-wrap').find('.tab-cont.first').removeClass('is-hidden')
        }
        $('.examples-slider').slick('setPosition')
		return false
	});

    /* Popup */
    /* ---------------------------------------------- */

    $(document).on('click', '.open-popup', function(e){
        e.preventDefault();
        $('.popup-content').removeClass('active');
        $('.popup-wrapper, .popup-content[data-popup="'+$(this).data('popup')+'"]').addClass('active');
        $('html').addClass('overflow-hidden');
        return false;
    });

    $(document).on('click', '.open-popup-image', function(e){
        e.preventDefault();
        $('.popup-content').removeClass('active');
        var imgSrc = $(this).data('img')
        $('.popup-wrapper, .popup-content[data-popup="'+$(this).data('popup')+'"]').addClass('active').find('.popup-image').attr('src', imgSrc);

        $('html').addClass('overflow-hidden');
        return false;
    });

    $(document).on('click', '.popup-wrapper .popup-close', function(e){
        e.preventDefault();
        $('.popup-wrapper, .popup-content').removeClass('active');
        $('html').removeClass('overflow-hidden');
        return false;
    });

    $(document).on('click', '.popup-content', function(e){
        if (e.target !== this) 
            return;
        $('.popup-wrapper, .popup-content').removeClass('active');
        $('html').removeClass('overflow-hidden');
        return false;
    });

    
	/* Plugins */
	/* ---------------------------------------------- */

	/* Styler */
    if($('.styler').length){
        $('.styler').styler();
    };

    
    if($('.lazy').length){
        $('.lazy').Lazy();
    }



    /* Slick */
    if($('.examples-slick').length){

    	var $examplesSlider = $('.examples-slick');
    	var $paging = $('.esp .paging');
       
        $examplesSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            
	        var i = (currentSlide ? currentSlide : 0) + 1;
	        if(i > 9) {
	        	$paging.html(i + '<span class="slick-devider"></span>' + '<span class="sr">' + slick.slideCount + '</span>');
	        } else {
	        	$paging.html('0'+i + '<span class="slick-devider"></span>' + '<span class="sr">' + slick.slideCount + '</span>');
	        }
	        
        });

        $examplesSlider.slick({
        	infinite: true,
        	slidesToShow: 1,
            
            mobileFirst: true,
            adaptiveHeight: true,
        	appendArrows: '.esp',
        	prevArrow: '<button class="slick-arrow slick-prev"></button>',
        	nextArrow: '<button class="slick-arrow slick-next"></button>',
            responsive: [
             {
                    breakpoint: 767,
                    settings: {
                        rows: 2,
                        slidesToShow: 3,
                        
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        rows: 2,
                        slidesToShow: 2,
                        
                    }
                }
            ]

         });

    };

    if($('.examples-slick1').length){

        var $examplesSlider44 = $('.examples-slick1');
        var $paging44 = $('.esp1 .paging');
       
        $examplesSlider44.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            
            var i = (currentSlide ? currentSlide : 0) + 1;
            if(i > 9) {
                $paging44.html(i + '<span class="slick-devider"></span>' + '<span class="sr">' + slick.slideCount + '</span>');
            } else {
                $paging44.html('0'+i + '<span class="slick-devider"></span>' + '<span class="sr">' + slick.slideCount + '</span>');
            }
            
        });

        $examplesSlider44.slick({
            
            slidesToShow: 1,
            
            mobileFirst: true,
            
            adaptiveHeight: true,
            appendArrows: '.esp1',
            prevArrow: '<button class="slick-arrow slick-prev"></button>',
            nextArrow: '<button class="slick-arrow slick-next"></button>',
            responsive: [
             {
                    breakpoint: 767,
                    settings: {
                        rows: 2,
                        slidesToShow: 3,
                        
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        rows: 2,
                        slidesToShow: 2,
                        
                    }
                }
            ]

         });

    };

    if($('.examples-slick2').length){

        var $examplesSlider11 = $('.examples-slick2');
        var $paging11 = $('.esp2 .paging');
       
        $examplesSlider11.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            
            var i = (currentSlide ? currentSlide : 0) + 1;
            if(i > 9) {
                $paging11.html(i + '<span class="slick-devider"></span>' + '<span class="sr">' + slick.slideCount + '</span>');
            } else {
                $paging11.html('0'+i + '<span class="slick-devider"></span>' + '<span class="sr">' + slick.slideCount + '</span>');
            }
            
        });

        $examplesSlider11.slick({
           
            slidesToShow: 1,
           
            mobileFirst: true,
            
            adaptiveHeight: true,
            appendArrows: '.esp2',
            prevArrow: '<button class="slick-arrow slick-prev"></button>',
            nextArrow: '<button class="slick-arrow slick-next"></button>',
            responsive: [
             {
                    breakpoint: 767,
                    settings: {
                        rows: 2,
                        slidesToShow: 3,
                        
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        rows: 2,
                        slidesToShow: 2,
                        
                    }
                }
            ]

         });

    };

    if($('.examples-slick3').length){

        var $examplesSlider22 = $('.examples-slick3');
        var $paging22 = $('.esp3 .paging');
       
        $examplesSlider22.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
           
            var i = (currentSlide ? currentSlide : 0) + 1;
            if(i > 9) {
                $paging22.html(i + '<span class="slick-devider"></span>' + '<span class="sr">' + slick.slideCount + '</span>');
            } else {
                $paging22.html('0'+i + '<span class="slick-devider"></span>' + '<span class="sr">' + slick.slideCount + '</span>');
            }
            
        });

        $examplesSlider22.slick({
            
            slidesToShow: 1,
            
            mobileFirst: true,
            adaptiveHeight: true,
           
            appendArrows: '.esp3',
            prevArrow: '<button class="slick-arrow slick-prev"></button>',
            nextArrow: '<button class="slick-arrow slick-next"></button>',
            responsive: [
             {
                    breakpoint: 767,
                    settings: {
                        rows: 2,
                        slidesToShow: 3,
                        
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        rows: 2,
                        slidesToShow: 2,
                        
                    }
                }
            ]

         });

    };
    if($('.examples-slick4').length){

        var $examplesSlider33 = $('.examples-slick4');
        var $paging33 = $('.esp4 .paging');
       
        $examplesSlider33.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            
            var i = (currentSlide ? currentSlide : 0) + 1;
            if(i > 9) {
                $paging33.html(i + '<span class="slick-devider"></span>' + '<span class="sr">' + slick.slideCount + '</span>');
            } else {
                $paging33.html('0'+i + '<span class="slick-devider"></span>' + '<span class="sr">' + slick.slideCount + '</span>');
            }
            
        });

        $examplesSlider33.slick({
           
            slidesToShow: 1,
            
            mobileFirst: true,
            
            adaptiveHeight: true,
            appendArrows: '.esp4',
            prevArrow: '<button class="slick-arrow slick-prev"></button>',
            nextArrow: '<button class="slick-arrow slick-next"></button>',
            responsive: [
             {
                    breakpoint: 767,
                    settings: {
                        rows: 2,
                        slidesToShow: 3,
                        
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        rows: 2,
                        slidesToShow: 2,
                        
                    }
                }
            ]

         });

    };

    

    var $examplesSlider2 = $('.reviews-slider');
    var examplesSlider2 = $examplesSlider2[0];
    var $paging2 = $('.reviews-slider-paging .paging');


    $examplesSlider2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        if (!event.target.classList.contains('reviews-slider')) {
            return;
        }    
        var i = (currentSlide ? currentSlide : 0) + 1;
        if(i > 9) {
            $paging2.html(i + '<span class="slick-devider"></span>' + '<span class="sr">' + slick.slideCount + '</span>');
        } else {
            $paging2.html('0'+i + '<span class="slick-devider"></span>' + '<span class="sr">' + slick.slideCount + '</span>');
        }

    });
    $examplesSlider2.slick({
        slidesToShow: 1,
        adaptiveHeight: true,
        swipe: true, 
        infinite: false, 
        appendArrows: '.reviews-slider-paging',
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>',
    })


    $('.reviews-gallery-slider').on('mousedown touchmove', function(){

        examplesSlider2.slick.setOption({
            swipe: false,
            touchMove: false,
        });
    });


    $('.reviews-gallery-slider').slick({
        slidesToShow: 3,
        adaptiveHeight: true,
        infinite: false,
        swipe: true,

        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>',
         responsive: [
            {
                breakpoint: 640,
                settings: {
                    
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    
                    slidesToShow: 1,
                }
            }
        ]
    }).on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        event.stopPropagation();

        examplesSlider2.slick.setOption({
            swipe: true,
            touchMove: true,
        });
    });
    

    if($('.contacts-slider').length){
        var $examplesSlider3 = $('.contacts-slider');

        $examplesSlider3.slick({
            slidesToShow: 1,
            adaptiveHeight: true,

            appendArrows: '.contacts-slider-paging',
            prevArrow: '<button class="slick-arrow slick-prev"></button>',
            nextArrow: '<button class="slick-arrow slick-next"></button>',
        });
   
    };

    if($('.before-after-slider').length){
        var $Slider5 = $('.before-after-slider');

        $Slider5.slick({
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow: '<button class="slick-arrow slick-prev"></button>',
            nextArrow: '<button class="slick-arrow slick-next"></button>',
        });
   
    };


   

});


function getYaMap(){
    if($('#map').length){
     ymaps.ready(init); // карта соберется после загрузки скрипта и элементов
        var myMap; // заглобалим переменную карты чтобы можно было ею вертеть из любого места
        function init () { // функция - собиралка карты и фигни
            var myMap = new ymaps.Map("map", {
                center: [55.635691, 37.009368], 
                zoom: 14,
                controls: [],

            });
            myMap.behaviors.disable('scrollZoom', 'drag'); 
            myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                // hintContent: 'Собственный значок метки',
                // balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/pin.png',
                // Размеры метки.
                iconImageSize: [69, 78],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                
            })
            /* Добавляем метки на карту */
            myMap.geoObjects.add(myPlacemark);

        }
    }
};