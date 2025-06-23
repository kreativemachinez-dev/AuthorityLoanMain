// ************************************************* //
// * +++++++++++ Fixed header ++++++++++++ * //
// ************************************************* //

$(window).on('scroll', function() {
    if($(this).scrollTop() > 250 ) {
      $(".aul__header").addClass("fixed__header");
    } else {
      $(".aul__header").removeClass("fixed__header");
    }
  });




// ************************************************* //
// * +++++++++++ Fancybox Gallery ++++++++++++ * //
// ************************************************* //

Fancybox.bind('[data-fancybox="gallery-1"]', {
  caption: function (fancybox, slide) {
    const figurecaption = slide.triggerEl?.querySelector(".tab-caption");
    return figurecaption ? figurecaption.innerHTML : slide.caption || "";
  },
});


// ************************************************* //
// * +++++++++++ Swiper Sliders ++++++++++++ * //
// ************************************************* //

var heroThumbSwiper = new Swiper(".abin__hero-thumb-swiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  watchSlidesProgress: true,
  allowTouchMove: false,
  watchOverflow: true,
});
const progress = document.querySelector('.autoplay-progress');
var heroSwiper = new Swiper(".abin__hero-swiper", {
  spaceBetween: 10,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination", 
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function () {
      progress.classList.remove("animate");
      progress.classList.add("animate");
    },
    slideChangeTransitionStart: function () {
      progress.classList.remove("animate");
    },
    slideChangeTransitionEnd: function () {
      progress.classList.add("animate");
    }
  },
  thumbs: {
    swiper: heroThumbSwiper,
  },
});
var stoneThumbSwiper = new Swiper(".abin__stone-thumb-swiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  watchSlidesProgress: true,
  allowTouchMove: false,
  watchOverflow: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});
var stoneSwiper = new Swiper(".abin__stone-swiper", {
  spaceBetween: 10,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next-stone",
    prevEl: ".swiper-button-prev-stone",
  },
  thumbs: {
    swiper: stoneThumbSwiper,
  },
});
var companySwiper = new Swiper(".abin__company-swiper", {
  autoPlay: false,
  spaceBetween: 32,
  loop: true,
  autoplay: {
    delay: 3500,
  },
  breakpoints: {
    0: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 6
    }
  }
});
var testimonialsSwiper = new Swiper(".abin__testimonials-swiper", {
  autoPlay: false,
  spaceBetween: 45,
  navigation: {
    nextEl: ".swiper-button-next-testimonialsSW",
    prevEl: ".swiper-button-prev-testimonialsSW",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    360: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
var concernSwiper = new Swiper(".abin__concern-swiper", {
  autoPlay: false,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next-concernSW",
    prevEl: ".swiper-button-prev-concernSW",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    360: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
});
var productSwiper = new Swiper(".abin__product-swiper", {
  autoPlay: false,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next-productSW",
    prevEl: ".swiper-button-prev-productSW",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    360: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
});
var businessSwiper = new Swiper(".abin__business-swiper", {
  autoPlay: false,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next-businessSW",
    prevEl: ".swiper-button-prev-businessSW",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    360: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
});
var achievementSwiper = new Swiper(".abin__achievement-swiper", {
  autoPlay: false,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next-achievementSW",
    prevEl: ".swiper-button-prev-achievementSW",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    360: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    }
  }
});


// var elements = $('.abin__marquee ul li').length;
// for(var i=0;i < elements; i++){
//  $(".abin__marquee ul li").clone().prependTo( ".abin__marquee ul" );
// };
// var liEle = [];
// var liEle = $(".abin__marquee ul li");

$(document).ready(function () {
  let $thumbItems = $('.abin__sustainability-single');
  let $infoItems = $('.abin__sustainability-info');
  let currentActiveContent = $('.abin__sustainability-single.active').data('content');

  // Function to update the active state
  function updateActiveState(contentId) {
    $thumbItems.removeClass('active');
    $infoItems.removeClass('active');
    $(`[data-content="${contentId}"]`).toggleClass('active', true);
  }

  // Hover event
  $thumbItems.on('mouseenter', function () {
    updateActiveState($(this).data('content'));
  });

  // Revert to default active on hover out
  $thumbItems.on('mouseleave', function () {
    updateActiveState(currentActiveContent);
  });

  // Update default active state on click
  $thumbItems.on('click', function () {
    currentActiveContent = $(this).data('content');
  });


  $(".abin__git-box").on('mouseenter', function() {
    $(".abin__git-box").removeClass("active")
    $(this).toggleClass("active")
  }) 
});

var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var colorPalette = ['#e1dbdb', '#C5B7B7', , '#352D17', '#534C3A', '#FDDC91', '#ffebbf'];
var app = {};

var option;

option = {
  tooltip: {
    trigger: 'item'
  },
  // visualMap: {
  //   show: false,
  //   min: 80,
  //   max: 200,
  //   inRange: {
  //     colorLightness: [0, 1]
  //   }
  // },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '60%',
      data: [
        { value: 75, name: 'Copper' },
        { value: 9, name: 'Zinc' },
        { value: 9, name: 'Gold' },
        { value: 1, name: 'Nickel' },
        { value: 2, name: 'Molybdenum' },
        { value: 4, name: 'Other' }
      ],
      color: colorPalette,
      emphasis: {

        itemStyle: {
          color: "C5B7B7",
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
      
    }
  ]
};


if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);

(function($,window) {
	var $body = $('body');
	$(document).ready(function(){
		mapInfoInit();
	});

	function mapInfoInit() {
		$('.map-location-marker')
			.click(function(e){
				e.preventDefault();
				$('#map-info, #overlay').remove();
				buildmapInfo(
					$(this).data('mapLink'),
					$(this).data('mapTitle'),
					$(this).data('mapImage'),
					$(this).data('jobListings')
				);
			});
	}

	function buildmapInfo ( location, title, src, link )
	{
		$('<div id="map-info">')
			.addClass(location)
			.fadeIn('slow')
			.appendTo('#places-map .map')
			.html(
				'<h1>' + title + '</h1>' +
				'<a href="' + link + '">See Jobs</a>' +
				'<img src="https://jeffbridgforth.com/codepen/' + src + '" alt="" />' +
				'<span class="close-btn"></span>'
			);
		// Close map info if click anywhere outside of it
		/* http://stackoverflow.com/questions/1403615/use-jquery-to-hide-a-div-when-the-user-clicks-outside-of-it */
		var mapInfo = $('#map-info');
			$(document).mouseup(function(e) {
				if ( !mapInfo.is(e.target) && mapInfo.has(e.target).length === 0)
				{
					mapInfo
					.fadeOut('slow', function(){
						$(this).remove();
					 });
				}
				
			});
			$('#map-info .close-btn').click(function(e) {
				$('#map-info').fadeOut('slow', function(){
						$(this).remove();
					 });
			});
	}

}(jQuery,window));