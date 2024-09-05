import axios from 'axios'
import { toast } from 'react-toastify'
import { t } from '@/i18n'
import { useMediaMangerStore } from '../store/mediaManagerStore'
import type { Image } from '../types.d'
import numeral from 'numeral'

export const useMediaManager = () => {
	const { setFiles, setFilesTotal, setFileSelected } = useMediaMangerStore()

	/**
	 * Fetches the list of media files from the server and updates the state.
	 * If the request fails, an error toast is displayed.
	 *
	 * @returns {Promise<void>} A promise that resolves when the files have been fetched and state updated.
	 *
	 *
	 *
	 */
	const getFiles = async (): Promise<void> => {
		const { data, status } = await axios.get(route('media.list'))
		if (200 !== status) {
			toast.error(t('Error fetching files'))
			return
		}

		setFiles && setFiles(Object.entries(data.images).map((e) => e[1]))
		setFilesTotal && setFilesTotal(data.images_total)
	}

	/**
	 * Deletes a media file from the server and updates the state.
	 *
	 * @param {string} uuid - The UUID of the media file to delete.
	 *
	 * @returns {Promise<void>} A promise that resolves when the file has been deleted and state updated.
	 *
	 *
	 *
	 */
	const deleteFile = async (uuid: string) => {
		let confirmationWindow = null

		const confirmationResult = (confirmationWindow = window.confirm(
			t(
				"You are about to permanently delete this file.\nThis action cannot be undone.\nPress 'Cancel' to stop, 'OK' to delete."
			) as string
		))

		if (confirmationResult) {
			const { data, status } = await axios.delete(
				route('media.delete', { uuid })
			)

			if (200 !== status) {
				toast.error(t('Error fetching files'))
				return
			}

			toast.success(data.message)
			getFiles()
		}
	}

	/**
	 * Converts a size in bytes to a human-readable string with appropriate units.
	 *
	 * @param size - The size in bytes to be converted.
	 * @returns {string} A string representing the size in a human-readable format with appropriate units.
	 *
	 *
	 *
	 */
	const formatSize = (size: number): string => {
		const units = ['B', 'KB', 'MB', 'GB', 'TB']
		let value = size
		let index = 0

		while (value >= 1024 && index < units.length - 1) {
			value /= 1024
			index++
		}

		return numeral(value).format('0,0') + units[index]
	}

	return {
		getFiles,
		deleteFile,
		formatSize,
	}
}
