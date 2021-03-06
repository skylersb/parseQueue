var app = angular.module('fairPolls');
app.directive('createChart', function(parseService) {
	return {
		restrict: 'E',
		replace: true,
		template: '<div id="chartdiv" style="width: 100%; height: 400px;" ></div>',
		link: function(scope, element, attrs) {
			var chart = false;
			var initChart = function(pieNums1) {
				console.log('run')
				if(chart) chart.destroy();
				var config = scope.config || {};
				console.log('create chart with: ' + pieNums1)
				chart = AmCharts.makeChart("chartdiv",
				{
					"type": "pie",
					"pathToImages": "http://cdn.amcharts.com/lib/3/images/",
					"angle": 12,
					"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
					"depth3D": 15,
					"marginTop": 5,
					"outlineColor": "#fff",
					"outlineThickness": 3,
					"minRadius": 95,
					"maxLabelWidth": 110,
					"fontSize": 15,
					"labelTickColor": "#fff",
					"titleField": "option",
					"valueField": "count",
					"color": "#fff",
					// "theme": "light",
					"allLabels": [],
					"balloon": {},
					"dataProvider": pieNums1,
					"legend": {
						"align": "center",
						"textClickEnabled": true,
						"spacing": 45,
						"valueWidth": 20,
						"color": "#FFFFFF",
						"markerType": "square"
					}
				})
			}

			var getData = function(){
				console.log(scope.poll)
				parseService.getResults(scope.poll)
					.then(function(res){
						initChart(res);
					})
				
			
			}

			getData();
		}
	}
})