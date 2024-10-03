// const options = {
// 	chart: {
// 		id: 'lineAreaChartDemo',
// 		type: 'area',
// 		parentHeightOffset: 0,
// 		toolbar: {
// 			show: false,
// 		},
// 	},
// 	dataLabels: {
// 		enabled: false,
// 	},
// 	stroke: {
// 		show: false,
// 		curve: 'straight',
// 	},
// 	legend: {
// 		show: true,
// 		position: 'top',
// 		horizontalAlign: 'start',
// 		labels: {
// 			colors: '#888',
// 			useSeriesColors: true,
// 		},
// 	},
// 	grid: {
// 		borderColor: '#888',
// 		xaxis: {
// 			lines: {
// 				show: false,
// 			},
// 		},
// 	},
// 	colors: ['#29dac7', '#60f2ca', '#a5f8cd'],
// 	xaxis: {
// 		categories: [
// 			'7/12',
// 			'8/12',
// 			'9/12',
// 			'10/12',
// 			'11/12',
// 			'12/12',
// 			'13/12',
// 			'14/12',
// 			'15/12',
// 			'16/12',
// 			'17/12',
// 			'18/12',
// 			'19/12',
// 			'20/12',
// 		],
// 		axisBorder: {
// 			show: false,
// 		},
// 		axisTicks: {
// 			show: false,
// 		},
// 		labels: {
// 			style: {
// 				colors: '#888',
// 				fontSize: '13px',
// 			},
// 		},
// 	},
// 	yaxis: {
// 		labels: {
// 			style: {
// 				colors: '#888',
// 				fontSize: '13px',
// 			},
// 		},
// 	},
// 	fill: {
// 		opacity: 1,
// 		type: 'solid',
// 	},
// 	tooltip: {
// 		shared: false,
// 	},
// }

// const series = [
// 	{
// 		name: 'Visits',
// 		data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375],
// 	},
// 	{
// 		name: 'Clicks',
// 		data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275],
// 	},
// 	{
// 		name: 'Sales',
// 		data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220],
// 	},
// ]

const options = {
	chart: {
		type: 'line',
		toolbar: { show: false },
		zoom: { enabled: false }, // Disable zoom
	},
	stroke: {
		curve: 'smooth', // Smooth curve for the line
		width: 3,
	},
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.6, // Higher starting opacity
			opacityTo: 0.1, // Lower ending opacity for a soft fade
			stops: [0, 90, 100],
		},
	},
	markers: {
		size: 0, // Remove the nodes (data markers)
	},
	legend: { show: false },
	dataLabels: {
		enabled: false, // Disable the always-visible labels
	},
	colors: ['#2196F3'], // Blue color for the line
	xaxis: {
		labels: { show: false }, // Hide X-axis labels
		axisBorder: { show: false }, // Hide X-axis border
		axisTicks: { show: false }, // Hide X-axis ticks
	},
	yaxis: {
		show: false, // Hide Y-axis completely
	},
	grid: {
		show: false, // No gridlines
	},
	tooltip: {
		enabled: true,
		intersect: false,
		x: {
			formatter: (idx) => years[idx - 1], // Show the year in the tooltip
		},
		y: {
			title: {},
			formatter: (val: number) => `${val.toFixed(2)}`, // Format the tooltip to show as sales amount
		},
	},
}

const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021']

// Replace the example data with your actual sales amounts
const series = [
	{
		name: 'Sales',
		data: [3000, 5000, 3500, 5000, 4000, 6000, 4500],
	},
]

export { options, series }
