import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Image } from '@nextui-org/react'

export const SingleImageUploader = () => {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
	const [preview, setPreview] = useState<string | null>(null)

	useEffect(() => {
		if (acceptedFiles.length > 0) {
			const file = acceptedFiles[0]
			const previewUrl = URL.createObjectURL(file)
			setPreview(previewUrl)

			// Clean up the URL object
			return () => URL.revokeObjectURL(previewUrl)
		}
	}, [acceptedFiles])

	// const files = acceptedFiles.map((file) => (
	// 	<li key={file.path}>
	// 		{file.path} - {file.size} bytes
	// 	</li>
	// ))

	return (
		<section className="container">
			<div
				{...getRootProps({ className: 'dropzone' })}
				className="border border-gray-500 w-44 h-44 rounded-lg"
			>
				<input {...getInputProps()} />

				{preview ? (
					<Image
						src={preview}
						alt="Preview"
						className="w-full h-full object-cover rounded-lg"
					/>
				) : (
					<p>Drag 'n' drop some files here, or click to select files</p>
				)}
			</div>
		</section>
	)
}
