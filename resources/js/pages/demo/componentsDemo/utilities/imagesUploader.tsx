import { useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import { ImageUploader } from '@/components/uploaders'
import { MediaManager } from '@/components'

import img01 from '@/assets/img/cards/01.jpg'

export const SingleImageUploader = () => {
	const [image, setImage] = useState<string | null>(img01)

	return (
		<Card>
			<CardHeader>Single image uploader</CardHeader>

			<CardBody>
				<ImageUploader
					onFileUpload={(file) => {
						if (file) {
							const previewUrl = URL.createObjectURL(file)
							setImage(previewUrl)
						} else {
							setImage(null)
						}
					}}
					defaultImageSrc={image ?? null}
				/>

				<div className="mt-6">
					<MediaManager />
				</div>
			</CardBody>
			<CardFooter />
		</Card>
	)
}

// interface Props {}

export const MultipleImageUploader = () =>
	// {}: Props
	{
		const [image, setImage] = useState<string | null>(img01)

		return (
			<Card>
				<CardHeader>Multiple image uploader</CardHeader>

				<CardBody>
					<ImageUploader
						onFileUpload={(file) => {
							if (file) {
								const previewUrl = URL.createObjectURL(file)
								setImage(previewUrl)
							} else {
								setImage(null)
							}
						}}
						defaultImageSrc={image ?? null}
					/>
				</CardBody>
			</Card>
		)
	}
