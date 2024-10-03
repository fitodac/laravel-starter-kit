import { useRef } from 'react'
import Chart from 'react-apexcharts'
import { commonColors, semanticColors } from '@nextui-org/theme'
console.log('commonColors', commonColors)
console.log('semanticColors', semanticColors)
import * as config from './helpers'
import { ApexOptions } from 'apexcharts'

export const LineAreaCharts = () => {
	return (
		<div className="space-y-6" id="lineArea">
			<h3 className="font-semibold">Line Area</h3>

			<Chart
				options={config.areachart.options as ApexOptions}
				series={config.areachart.series}
				type="area"
				height={340}
			/>

			<p className="text-xs">
				With their mountain-like appearance, Area Charts are used to represent
				quantitative variations. Be it examining the variation in the population
				of a tribe or determining the average performance of the students. Area
				charts differ from line charts because the area bounded by the plotted
				data points is filled with shades or colors.
			</p>
		</div>
	)
}

export const BarCharts = () => {
	return (
		<div className="space-y-6" id="barchart">
			<h3 className="font-semibold">Bar Chart</h3>

			<Chart
				options={config.barchart.options as ApexOptions}
				series={config.barchart.series}
				type="bar"
				height={340}
			/>

			<p className="text-xs">
				With their mountain-like appearance, Area Charts are used to represent
				quantitative variations. Be it examining the variation in the population
				of a tribe or determining the average performance of the students. Area
				charts differ from line charts because the area bounded by the plotted
				data points is filled with shades or colors.
			</p>
		</div>
	)
}
