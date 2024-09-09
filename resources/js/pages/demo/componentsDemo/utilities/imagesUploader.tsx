import { useEffect, useState } from 'react'
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Button,
} from '@nextui-org/react'
import { ImageUploader } from '@/components/uploaders'
import { MediaManager } from '@/components'
import { t } from '@/i18n'

import img01 from '@/assets/img/cards/01.jpg'

export const SingleImageUploader = () => {
	const [image, setImage] = useState<string | null>(img01)

	return (
		<Card>
			<CardHeader>Single image uploader</CardHeader>

			<CardBody>
				<div className="grid gap-6 md:grid-cols-2">
					<div>
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
					</div>

					<div className="text-foreground-500 text-sm space-y-3">
						<p>
							The uploader component simplifies file handling by allowing users
							to easily upload images directly from the interface. It also
							offers flexibility for managing where and how files are stored,
							improving the overall user experience and reducing backend
							workload.
						</p>
						<p>
							This image isn’t being saved; it’s only displayed in the browser
							for demonstration purposes. However, you can use a component prop
							to store the file wherever needed.
						</p>
					</div>
				</div>
			</CardBody>
			<CardFooter />
		</Card>
	)
}

export const MediaManagerImageUpload = () => {
	// const [image, setImage] = useState<Image | null>(null)
	const [image, setImage] = useState<Image | null>({
		id: 34,
		model_type: 'App\\Models\\MediaManager',
		model_id: 1,
		uuid: '6e9b7368-83e0-4c7b-b63c-b2a9884bc4a2',
		collection_name: 'images',
		name: 'blog-images-821',
		file_name: 'blog-images-82.jpg',
		mime_type: 'image/jpeg',
		disk: 'public',
		conversions_disk: 'public',
		size: 172576,
		manipulations: [],
		custom_properties: {
			altText: 'Imagen de un niño',
			caption: '',
			description: '',
		},
		generated_conversions: {},
		responsive_images: [],
		order_column: 32,
		created_at: '2024-09-07T14:10:43.000000Z',
		updated_at: '2024-09-07T14:56:29.000000Z',
		original_url: 'http://localhost/storage/34/blog-images-82.jpg',
		preview_url:
			'http://localhost/storage/34/conversions/blog-images-82-preview.jpg',
	})

	// useEffect(() => console.log('image', JSON.stringify(image)), [image])

	return (
		<Card>
			<CardHeader>Upload image from Media Manager</CardHeader>

			<CardBody>
				<div className="grid gap-6 md:grid-cols-2">
					<div>
						{image && image.preview_url ? (
							<img
								src={image.preview_url}
								alt="Uploaded image"
								className="w-44 h-44 object-cover rounded-md"
							/>
						) : (
							<div className="bg-background border border-foreground-200 w-44 h-44 grid place-content-center rounded-md">
								<i className="ri-image-add-line ri-2x text-foreground-300" />
							</div>
						)}

						<div className="w-44 grid mt-6 space-y-4">
							<MediaManager
								{...{
									onFilesSelected: (file) => setImage(file),
									button: {
										props: { fullWidth: true },
									},
									collection: image ? [image] : null,
									// selectMultiple: false,
								}}
							/>

							{image && (
								<Button
									fullWidth
									color="danger"
									size="sm"
									variant="flat"
									onPress={() => setImage(null)}
								>
									{t('Remove image')}
								</Button>
							)}
						</div>
					</div>

					<div className="text-foreground-500 text-sm space-y-3">
						<p>
							The Media Manager component allows users to upload, manage, and
							embed images easily. It includes an image uploader, a gallery of
							saved images, and the ability to select and insert images wherever
							needed.
						</p>
						<p></p>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

export const GalleryMediaManager = () => {
	const [images, setImages] = useState<any[] | null>(null)

	return (
		<>
			<Card>
				<CardHeader>Media Gallery</CardHeader>

				<CardBody>
					<div className="grid gap-6 md:grid-cols-2">
						<div>
							<MediaManager
								{...{
									// onFileUpload: (file) => setImage(file.preview_url),
									selectMultiple: true,
									button: {
										props: { fullWidth: true },
									},
								}}
							/>
						</div>

						<div className="text-foreground-500 text-sm space-y-3"></div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}

export type Image = {
	id: number
	model_type: string
	model_id: number
	uuid: string
	collection_name: string
	name: string
	file_name: string
	mime_type: string
	disk: string
	conversions_disk: string
	size: number
	manipulations: any[]
	custom_properties: {
		altText?: string
		caption?: string
		description?: string
	}
	generated_conversions: any
	responsive_images: any[]
	order_column: number
	original_url: string
	preview_url: string
	created_at: string
	updated_at: string
}
