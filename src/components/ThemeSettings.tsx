import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useContext, useEffect, useRef } from 'react'
import { BsCheck, BsSunFill } from 'react-icons/bs'
import { FaCloudMoon } from 'react-icons/fa'
import { MdOutlineCancel } from 'react-icons/md'
import { StateContext } from '../contexts/StateContext'
import { themeColors } from '../data/dummy'

const ThemeSettings = () => {
	const {
		setColor,
		setMode,
		currentMode,
		currentColor,
		setThemeSettings,
		themeSettings,
	} = useContext(StateContext)

	const refThemeSettings = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (!refThemeSettings.current?.contains(e.target as Node)) {
				setThemeSettings(!themeSettings)
			}
		}
		document.addEventListener('click', handleClickOutside, true)

		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [setThemeSettings, themeSettings])

	return (
		<div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
			<div
				className='float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] dark:bg-secondary-dark-bg w-400'
				ref={refThemeSettings}
			>
				<div className='flex justify-between items-center p-4 ml-4'>
					<p className='text-xl font-semibold'>Settings</p>
					<button
						className='rounded-full text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
						style={{ color: 'rgb(153, 171, 180' }}
						onClick={() => setThemeSettings(false)}
					>
						<MdOutlineCancel />
					</button>
				</div>
				<div className='flex-col border-t-1 border-color p-4 ml-4 mb-2'>
					<p className='font-semibold text-lg'>Theme Options</p>
					<div className='mt-4 flex relative'>
						<input
							type='radio'
							id='light'
							name='theme'
							value='Light'
							className='cursor-pointer invisible'
							onChange={setMode}
							checked={currentMode === 'Light'}
						/>
						<label
							htmlFor='light'
							className='ml-2 text-md cursor-pointer flex gap-2 items-center absolute -left-2'
							style={{ color: currentMode === 'Light' ? '#000' : 'grey' }}
						>
							<BsSunFill />
							Light
						</label>
					</div>
					<div className='flex mt-5 -left-2 relative'>
						<input
							type='radio'
							id='dark'
							name='theme'
							value='Dark'
							className='cursor-pointer invisible'
							onChange={setMode}
							checked={currentMode === 'Dark'}
						/>
						<label
							htmlFor='dark'
							className='flex ml-2 text-md cursor-pointer absolute gap-2 items-center'
							style={{ color: currentMode === 'Dark' ? '#fff' : 'grey' }}
						>
							<FaCloudMoon />
							Dark
						</label>
					</div>
				</div>
				<div className='flex-col border-t-1 border-color p-4 ml-4'>
					<p className='font-semibold text-lg'>Theme Colors</p>
					<div className='flex gap-3'>
						{themeColors.map((item, index) => (
							<TooltipComponent
								content={item.name}
								key={index}
								position='TopCenter'
							>
								<div className='mt-2 cursor-pointer flex gap-5 items-center'>
									<button
										className='w-10 h-10 cursor-pointer rounded-full'
										style={{ backgroundColor: item.color }}
										onClick={setColor}
										value={item.color}
									>
										<BsCheck
											className={`ml-2 text-2xl text-white ${
												item.color === currentColor ? 'block' : 'hidden'
											}`}
										/>
									</button>
								</div>
							</TooltipComponent>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ThemeSettings
