import { useWindowSize } from '@uidotdev/usehooks'

export const useIsMobile = () => {
	const size = useWindowSize()

	return size.width! / size.height! < 1
}
