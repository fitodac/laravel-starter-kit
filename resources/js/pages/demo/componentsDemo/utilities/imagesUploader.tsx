import { useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import { ImageUploader } from '@/components/uploaders'

import img01 from '@/assets/img/cards/01.jpg'

export const SingleImageUploader = () => {
	const [image, setImage] = useState(img01)

	return (
		<Card>
			<CardHeader>Single file image uploader</CardHeader>

			<CardBody>
				<ImageUploader
					onFileUpload={(e) => {
						// console.log('E', e)
						setImage(e)
					}}
					defaultImageSrc={image}
				/>
			</CardBody>
			<CardFooter />
		</Card>
	)
}
