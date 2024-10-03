const options = {
	chart: {
		type: 'line', // Change to 'area', 'bar', etc., based on your image
		height: 350,
		zoom: {
			enabled: false,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: 'smooth', // Options: 'smooth', 'straight', 'stepline'
	},

	xaxis: {
		categories: ['1970', '1980', '1990', '2000', '2010', '202'],
	},
	tooltip: {
		enabled: true,
	},
	// fill: {
	// 	type: 'gradient',
	// 	gradient: {
	// 		shadeIntensity: 1,
	// 		opacityFrom: 0.7,
	// 		opacityTo: 0.2,
	// 		stops: [0, 90, 100],
	// 	},
	// },
}

const series = [
	{
		name: 'Visitors',
		data: [30, 80, 90, 70, 30, 40], // Replace with actual data
	},
	{
		name: 'Sales',
		data: [60, 20, 40, 60, 90, 20], // Replace with actual data
	},
	{
		name: 'Customers',
		data: [95, 40, 35, 65, 55, 25], // Replace with actual data
	},
]

export { options, series }
