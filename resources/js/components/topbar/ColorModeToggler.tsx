import { Switch } from '@nextui-org/react'
import { useColorMode } from '@/hooks'

export const ColorModeToggler = ({}) => {
	const { colorMode, changeColorMode } = useColorMode()

	return (
		<>
			<Switch
				color="default"
				isSelected={colorMode === 'dark'}
				size="sm"
				thumbIcon={({ isSelected }) =>
					isSelected ? (
						<i className="ri-moon-fill text-zinc-800" />
					) : (
						<i className="ri-sun-fill text-yellow-500" />
					)
				}
				onChange={changeColorMode}
				classNames={{
					wrapper: 'mr-0',
				}}
			/>
		</>
	)
}
