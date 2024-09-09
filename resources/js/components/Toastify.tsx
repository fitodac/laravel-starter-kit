import { ToastContainer, Slide } from 'react-toastify'
import { useMainStore } from '@/store'

export const Toastify = (): JSX.Element => {
	const { colorMode } = useMainStore()

	return (
		<ToastContainer
			position="bottom-right"
			autoClose={4000}
			hideProgressBar={false}
			newestOnTop={true}
			closeOnClick
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme={colorMode}
			transition={Slide}
		/>
	)
}
