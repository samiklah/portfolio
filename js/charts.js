$(function () {

    $('#containerr').highcharts({

	    chart: {
	        polar: true,
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
	        categories: ['CSS', 'HTML', 'JavaScript', 'jQuery', 'Customer Service', 'Marketing', 'Project Management', 'Social Media'],
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
			showLastLabel: 'true',
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
	        data: [4.5, 4.5, 2, 2.5, 5, 4.1, 4, 3.75],
	        pointPlacement: "on"
	    }]
	});
});
