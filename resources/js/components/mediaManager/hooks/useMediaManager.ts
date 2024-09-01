import axios from 'axios'
import { toast } from 'react-toastify'
import { t } from '@/i18n'
import { useMediaMangerStore } from '../store/mediaManagerStore'

export const useMediaManager = () => {
	const { setFiles } = useMediaMangerStore()

	/**
	 * Get files
	 * @returns
	 */
	const getFiles = async () => {
		const { data, status } = await axios.get(route('media.list'))
		if (200 !== status) toast.error(t('Error fetching files'))
		setFiles && setFiles(Object.entries(data.images).map((e) => e[1]))
	}

	const formatSize = (size: number) => {
		const units = ['B', 'KB', 'MB', 'GB', 'TB']
		let value = size
		let index = 0

		while (value >= 1024 && index < units.length - 1) {
			value /= 1024
			index++
		}

		return `${value.toFixed(2)} ${units[index]}`
	}

	return {
		getFiles,
		formatSize,
	}
}
