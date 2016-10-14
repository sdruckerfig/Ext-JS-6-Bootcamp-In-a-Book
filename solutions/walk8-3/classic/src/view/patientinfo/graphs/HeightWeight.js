Ext.define('PatientChart.view.patientinfo.graphs.HeightWeight', {
	extend: 'Ext.chart.CartesianChart',
	alias: 'widget.patientheightweight',
	header: false,
	requires: [
		'Ext.chart.axis.Category',
		'Ext.chart.axis.Numeric',
		'Ext.chart.series.Line',
		'Ext.chart.interactions.Crosshair',
		'Ext.chart.interactions.ItemHighlight'
	],
	bind: {
		store: '{PatientDailyStats}'
	},
	interactions: [{
			type: 'itemhighlight'
		}, {
			type: 'crosshair',
			axes: {
				left: {
					label: {
						fillStyle: 'white'
					},
					rect: {
						fillStyle: 'brown',
						radius: 6
					}
				},
				bottom: {
					label: {
						fontSize: '14px',
						fontWeight: 'bold'
					}
				}
			},
			lines: {
				horizontal: {
					strokeStyle: 'brown',
					lineWidth: 2,
					lineDash: [20, 2, 2, 2, 2, 2, 2, 2]
				}
			}
		}
	],
	axes: [{
		type: 'category',
		fields: [
			'datelabel'
		],
		title: 'Date',
		position: 'bottom',
		label: {
			rotate: {
				degrees: 45
			}
		}
	}, {
		type: 'numeric',
		fields: [
			'height'
		],
		position: 'left',
		title: 'Height'
	}, {
		type: 'numeric',
		fields: [
			'weight'
		],
		position: 'right',
		title: 'Weight',
		grid: {
			odd: {
				opacity: 1,
				fill: '#ddd',
				stroke: '#bbb',
				lineWidth: 1
			}
		}
	}],
	series: [{
		type: 'line',
		xField: 'datelabel',
		yField: ['height'],
		smooth: true,
		title: 'Height',
	}, {
		type: 'line',
		xField: 'datelabel',
		yField: ['weight'],
		smooth: true,
		title: 'Weight',
		marker: {
			type: 'circle',
			radius: 4
		},

		highlight: {
			size: 7,
			radius: 7
		}
	}],
	legend: {
		docked: 'right'
	}

});