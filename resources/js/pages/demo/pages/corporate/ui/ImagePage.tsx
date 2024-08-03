import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	cn,
	Image,
} from '@nextui-org/react'

import img01 from '@/assets/img/cards/01.jpg'
import img02 from '@/assets/img/cards/02.jpg'
import img03 from '@/assets/img/cards/03.jpg'
import img04 from '@/assets/img/cards/04.jpg'
import { useRef, useState } from 'react'

export const Page = () => {
	const [imgLoaded, setImgLoaded] = useState(false)
	const [carouselSrc, setCarouselSrc] = useState(img01)

	return (
		<>
			<PageHeader title={t('Image')}>
				{/* <p className="text-lg font-medium leading-tight">
					Beautifully designed buttons that enhance visual appeal and usability.
				</p>
				<p className="font-light leading-tight mt-2">
					Each button is intuitive and responsive, providing efficient access to
					key functions. These buttons offer a perfect blend of aesthetics and
					practicality, ensuring a seamless user experience.
				</p> */}
			</PageHeader>

			<PageContent>
				<div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
					<Card>
						<CardHeader>Basic image</CardHeader>
						<CardBody>
							<div className="grid gap-7 lg:grid-cols-2">
								<div>
									<Image
										width="100%"
										height={300}
										alt="Image demo"
										src={img01}
										classNames={{ img: 'object-cover' }}
									/>
								</div>
							</div>
						</CardBody>
						<CardFooter />
					</Card>

					<Card>
						<CardHeader>On image load</CardHeader>
						<CardBody>
							<div className="grid gap-7 lg:grid-cols-2">
								<div className="space-y-4">
									<Image
										width="100%"
										height={300}
										alt="Image demo"
										src={`https://app.requestly.io/delay/2000/https://images.pexels.com/photos/27402086/pexels-photo-27402086/free-photo-of-a-large-fish-swimming-in-the-water.jpeg`}
										onLoad={() => setTimeout(() => setImgLoaded(true), 1000)}
										classNames={{ img: 'object-cover aspect-video' }}
									/>

									<div
										className={cn(
											'text-sm transition-opacity flex items-center gap-2',
											imgLoaded ? 'opacity-100' : 'opacity-0'
										)}
									>
										<i className="ri-image-circle-line ri-2x" />
										Image loaded!
									</div>
								</div>
							</div>
						</CardBody>
						<CardFooter />
					</Card>

					<Card>
						<CardHeader>Zoomed effect</CardHeader>
						<CardBody>
							<div className="grid gap-7 lg:grid-cols-2">
								<div>
									<Image
										isZoomed
										width="100%"
										height={300}
										alt="Image demo"
										src={img02}
										classNames={{ img: 'object-cover' }}
									/>
								</div>
							</div>
						</CardBody>
						<CardFooter />
					</Card>

					<Card>
						<CardHeader>Carousel</CardHeader>
						<CardBody>
							<div className="grid gap-7 lg:grid-cols-2">
								<div className="flex flex-col justify-between gap-3 h-full">
									<Image
										height={230}
										width="100%"
										alt="Image demo"
										src={carouselSrc}
										classNames={{ img: 'object-cover' }}
									/>

									<div className="flex justify-center gap-5">
										{[img01, img02, img03, img04].map((src) => {
											return (
												<Image
													width={40}
													src={src}
													alt={`pic ${src}`}
													onClick={() => setCarouselSrc(src)}
													classNames={{
														wrapper: cn(
															'cursor-pointer transition-opacity',
															carouselSrc === src &&
																'opacity-30 pointer-events-none'
														),
													}}
												/>
											)
										})}
									</div>
								</div>

								<div className="">
									<div></div>
								</div>
							</div>
						</CardBody>
						<CardFooter />
					</Card>

					<Card className="lg:col-span-2">
						<CardHeader>Rounded</CardHeader>
						<CardBody>
							<div className="grid grid-cols-3 gap-5 sm:flex lg:gap-10">
								{['none', 'sm', 'md', 'lg', 'full'].map((radius, idx) => (
									<div key={`rounded-${idx}`}>
										<Image
											width={120}
											alt="Image demo"
											// @ts-ignore
											radius={radius}
											src={img04}
											classNames={{ img: 'object-cover aspect-square' }}
										/>
									</div>
								))}
							</div>
						</CardBody>
						<CardFooter />
					</Card>

					<Card className="lg:col-span-2">
						<CardHeader>Shadow</CardHeader>
						<CardBody>
							<div className="grid grid-cols-3 gap-5 py-12 sm:flex lg:gap-10">
								{['sm', 'md', 'lg'].map((radius, idx) => (
									<div key={`rounded-${idx}`}>
										<Image
											width={120}
											alt="Image demo"
											// @ts-ignore
											shadow={radius}
											src={img03}
											classNames={{ img: 'object-cover aspect-square' }}
										/>
									</div>
								))}
							</div>
						</CardBody>
						<CardFooter />
					</Card>
				</div>

				<div className="h-20"></div>
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Image')) }} />
)

export default Page
