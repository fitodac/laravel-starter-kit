import colors from 'tailwindcss/colors'

export default {
	sidebar: {
		width: '230px',
		collapsedWidth: '0px',

		breakpoint: 820,

		title: {
			color: colors.gray[500],
		},
		item: {
			color: colors.gray[400], // Gray 400
			fontSize: '.9rem',
			height: '40px',
			hover: {
				backgroundColor: '#374151',
				color: 'white',
			},
			icon: {
				size: '1.2rem',
			},
		},
		subMenu: {
			backgroundColor: colors.gray[900], // Gray 900
		},
	},

	topbar: {
		height: '56px',
	},
}
