import { ToastContainer } from 'react-toastify'
import { useStoreMain } from '@/store'

export const Toastify = (): JSX.Element => {
	const { colorMode } = useStoreMain()

	return (
		<ToastContainer
			position="bottom-right"
			autoClose={4000}
			hideProgressBar={false}
			newestOnTop={true}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme={colorMode}
		/>
	)
}
