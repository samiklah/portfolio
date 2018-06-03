$(document).ready(function(event) {
	
		$(document).delegate('.open', 'click', function(event){
			$(this).addClass('oppenned');
			event.stopPropagation();
		})
		$(document).delegate('body', 'click', function(event) {
			$('.open').removeClass('oppenned');
		})
		$(document).delegate('.cls', 'click', function(event){
			$('.open').removeClass('oppenned');
			event.stopPropagation();
		});

		stepForm();
	});

	var card = $(".card");

	$(document).on("mousemove",function(e) {
	  var ax = -($(window).innerWidth()/2- e.pageX)/20;
	  var ay = ($(window).innerHeight()/2- e.pageY)/10;
	  card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
	});
// set and cache variables
		var w, container, carousel, item, radius, itemLength, rY, ticker, fps;
		var mouseX = 0;
		var mouseY = 0;
		var mouseZ = 0;
		var addX = 0;


		// fps counter created by: https://gist.github.com/sharkbrainguy/1156092,
		// no need to create my own :)
		var fps_counter = {

			tick: function ()
			{
				// this has to clone the array every tick so that
				// separate instances won't share state
				this.times = this.times.concat(+new Date());
				var seconds, times = this.times;

				if (times.length > this.span + 1)
				{
					times.shift(); // ditch the oldest time
					seconds = (times[times.length - 1] - times[0]) / 1000;
					return Math.round(this.span / seconds);
				}
				else return null;
			},

			times: [],
			span: 20
		};
		var counter = Object.create(fps_counter);



		$(document).ready( init )

		function init()
		{
			w = $(window);
			container = $( '#contentContainer' );
			carousel = $( '#carouselContainer' );
			item = $( '.carouselItem' );
			itemLength = $( '.carouselItem' ).length;
			fps = $('#fps');
			rY = 360 / itemLength;
			radius = Math.round( (250) / Math.tan( Math.PI / itemLength ) );

			// set container 3d props
			TweenMax.set(container, {perspective:600})
			TweenMax.set(carousel, {z:-(radius)})

			// create carousel item props

			for ( var i = 0; i < itemLength; i++ )
			{
				var $item = item.eq(i);
				var $block = $item.find('.carouselItemInner');

        //thanks @chrisgannon!
        TweenMax.set($item, {rotationY:rY * i, z:radius, transformOrigin:"50% 50% " + -radius + "px"});

				animateIn( $item, $block )
			}

			// set mouse x and y props and looper ticker
			window.addEventListener( "mousemove", onMouseMove, false );
			ticker = setInterval( looper, 1000/60 );
		}

		function animateIn( $item, $block )
		{
			var $nrX = 360 * getRandomInt(2);
			var $nrY = 360 * getRandomInt(2);

			var $nx = -(2000) + getRandomInt( 4000 )
			var $ny = -(2000) + getRandomInt( 4000 )
			var $nz = -4000 +  getRandomInt( 4000 )
			var $s = 1.5 + (getRandomInt( 10 ) * .1)
			var $d = 1 - (getRandomInt( 8 ) * .1)

			TweenMax.set( $item, { autoAlpha:1, delay:$d } )
			TweenMax.set( $block, { z:$nz, rotationY:$nrY, rotationX:$nrX, x:$nx, y:$ny, autoAlpha:0} )
			TweenMax.to( $block, $s, { delay:$d, rotationY:0, rotationX:0, z:0,  ease:Expo.easeInOut} )
			TweenMax.to( $block, $s-.5, { delay:$d, x:0, y:0, autoAlpha:1, ease:Expo.easeInOut} )
		}

		function onMouseMove(event)
		{
			mouseX = -(-(window.innerWidth * .5) + event.pageX) * .0025;
			mouseY = -(-(window.innerHeight * .5) + event.pageY ) * .01;
			mouseZ = -(radius) - (Math.abs(-(window.innerHeight * .5) + event.pageY ) - 200);
		}

		// loops and sets the carousel 3d properties
		function looper()
		{
			addX += mouseX
			TweenMax.to( carousel, 1, { rotationY:addX, rotationX:mouseY, ease:Quint.easeOut } )
			TweenMax.set( carousel, {z:mouseZ } )
			fps.text( 'Framerate: ' + counter.tick() + '/60 FPS' )
		}

		function getRandomInt( $n )
		{
			return Math.floor((Math.random()*$n)+1);
		}

$('.btn').click(function(event) {
  // animate content
  $('.page__style').addClass('animate_content');
  $('.page__description').fadeOut(100).delay(2800).fadeIn();

  setTimeout(function(event) {
    $('.page__style').removeClass('animate_content');
  }, 3200);

  //remove fadeIn class after 1500ms
  setTimeout(function(event) {
    $('.page__style').removeClass('fadeIn');
  }, 1500);

});

// on click show page after 1500ms
$('.home_link').click(function(event) {
  setTimeout(function() {
    $('.home').addClass('fadeIn');
  }, 1500);
});

$('.projects_link').click(function(event) {
  setTimeout(function() {
    $('.projects').addClass('fadeIn');
  }, 1500);
});

$('.skills_link').click(function(event) {
  setTimeout(function() {
    $('.skills').addClass('fadeIn');
  }, 1500);
});

$('.about_link').click(function(event) {
  setTimeout(function() {
    $('.about').addClass('fadeIn');
  }, 1500);
});

$('.contact_link').click(function(event) {
  setTimeout(function() {
    $('.contact').addClass('fadeIn');
  }, 1500);
});



$('.stage').click(function(event){
  $('.stage').toggleClass('active');
})


$(".skills").hover(function () {

	$(function () {

	    $('#chartcontainer').highcharts({

		    chart: {
		        polar: true,
	          height: 350,
	          backgroundColor:'rgba(255, 255, 255, 0.0)',
		        type: 'line'
		    },
		    credits: {
				enabled: false
			},
		    title: {
		        text: 'Skill Breakdown'
		    },

		    pane: {
		        startAngle: 0,
		        endAngle: 360
		    },

		    xAxis: {
		    	type: 'category',
		        tickInterval: 1,
		        categories: ['Web Development', 'Game Development', 'Software Development', 'Web Designing', 'SEO', 'Marketing', 'Project Management', 'illustration'],
		        min: 0,
		        max: 8,
		        tickmarkPlacement: 'on',

		        lineWidth: 0,
		        labels: {
		        	formatter: function () {
	        			return this.value
		        	}
		        },

		    },
		     tooltip: {
	            shared: true,
	            useHTML: true,
	            headerFormat: '<div class="newTip"><big>{point.key}</big>' + '<br/>',
	            pointFormat: '{point.y} / 5.0',
	            footerFormat: '</div>',
	            valueDecimals: 1
	        },
		    yAxis: {
	          gridLineInterpolation: 'polygon',
		        min: 0,
		        max: 5,
		        tickInterval: 1,
				minorTickInterval: 0.5,
				labels:{
						x: 8,
					style: {
						color: '#000',
						textShadow:'1px 1px 0px #fff',
						display: "inline-block"
						}
				},

		    },

		    plotOptions: {
		        series: {
		            pointStart: 0,
		            pointInterval: 1,

		        },
		        column: {
		            pointPadding: 0,
		            groupPadding: 0
		        }
		    },

		    series: [{
		        type: 'area',
		        name: 'Skills',
		        data: [4.9, 4.5, 3.5, 4.6, 3.5, 3.2, 3.6, 2.5],
		        pointPlacement: "on"
		    }]
		});
		$('#chartcontainerl').highcharts({

		    chart: {
		        polar: true,
	          height: 350,
	          backgroundColor:'rgba(255, 255, 255, 0.0)',
		        type: 'line'
		    },
		    credits: {
				enabled: false
			},
		    title: {
		        text: 'Languages experience'
		    },

		    pane: {
		        startAngle: 0,
		        endAngle: 360
		    },

		    xAxis: {
		    	type: 'category',
		        tickInterval: 1,
		        categories: ['HTML5', 'CSS3', 'JAVASCRIPT', 'PHP', 'PYTHON', 'JAVA'],
		        min: 0,
		        max: 6,
		        tickmarkPlacement: 'on',

		        lineWidth: 0,
		        labels: {
		        	formatter: function () {
	        			return this.value
		        	}
		        },

		    },
		     tooltip: {
	            shared: true,
	            useHTML: true,
	            headerFormat: '<div class="newTip"><big>{point.key}</big>' + '<br/>',
	            pointFormat: '{point.y} / 5.0',
	            footerFormat: '</div>',
	            valueDecimals: 1
	        },
		    yAxis: {
	          gridLineInterpolation: 'polygon',
		        min: 0,
		        max: 5,
		        tickInterval: 1,
				minorTickInterval: 0.5,
				labels:{
						x: 8,
					style: {
						color: '#000',
						textShadow:'1px 1px 0px #fff',
						display: "inline-block"
						}
				},

		    },

		    plotOptions: {
		        series: {
		            pointStart: 0,
		            pointInterval: 1,

		        },
		        column: {
		            pointPadding: 0,
		            groupPadding: 0
		        }
		    },

		    series: [{
		        type: 'area',
		        name: 'Languages',
		        data: [5, 5, 4.5, 4.8, 2, 3],
		        pointPlacement: "on"
		    }]
		});
	});

  $('.chart').easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 12,
    lineCap: 'butt',
    barColor: '#1abc9c',
    trackColor:	"#ecf0f1",
    size: 125,
    animate: 2000
  });

});

function stepForm() {
	var groupWrap = $('.group-wrapper'),
			inpWrap = groupWrap.find('.group-wrap'),
			input = inpWrap.find('input'),
			nextQ = $('.next-arrow'),
			progress = $('.progress'),
			results = $('.results'),
			subBtn = $('.submit-btn'),
			thankYouMsg = $('.thankYouMsg');

	input.each(function(){
		input.on('keyup', function(e){
			if(input.val() == "") {
				$('.next-arrow').removeClass('active')
			} else {
				$('.next-arrow').addClass('active')
			}
		})
	})

	// watch for enter to trigger click for next question
	$(document).keypress(function(e){

		if(e.which == 13) {
			e.preventDefault();
      nextQ.trigger('click')
    }
	})

	nextQ.on('click', function() {
		var emptyNum = 0,
				activeInput = groupWrap.find('.active-inp'),
				position = groupWrap.children().index(activeInput),
				inputNum = inpWrap.length;

		input.each(function(){
			if($(this).val() != '') {
				emptyNum++;
			}
		})

		progress.css('width', emptyNum * (100 / input.length) + '%')

		if(emptyNum < 4) {
			if (activeInput.find('input').val() != "") {
				activeInput.removeClass('active-inp').next().addClass('active-inp').find('input').focus();

			}

		} else {
			activeInput.removeClass('active-inp')
			groupWrap.addClass('results-shown');

			inpWrap.each(function(i){
				results.append('<div>' + inpWrap.eq(i).find('label').attr('name')
											 + ': <span> '+ inpWrap.eq(i).find('input').val() +
											 ' </span></div>').addClass('active');

				input.eq(i).val("");
			})

			$(document).off('keypress');
			nextQ.removeClass('active');
			subBtn.addClass('active');
		}
	})
}

var objDiv = document.getElementById("#group-wrapper");

/*
function setup() {
	noCanvas();
	let lang = navigator.language || 'en-US';
	let speechRec = new p5.SpeechRec(lang, gotSpeech);
	speechRec.start();

	function gotSpeech() {
		if (speechRec.resultValue) {
			//console.log(speechRec);
			createP(speechRec.resultString);
		}
	}
}*/
