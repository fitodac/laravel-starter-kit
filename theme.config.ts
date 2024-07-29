import colors from 'tailwindcss/colors'

export default {
	sidebar: {
		width: '230px',
		collapsedWidth: '0px',

		breakpoint: 768,

		item: {
			color: '#9ca3af', // Gray 400
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
			backgroundColor: '#111827', // Gray 900
		},
	},

	topbar: {
		height: '56px',
	},
}
