import { useContext } from 'react'
import WidgetButton from '../atoms/WidgetButton'
import WidgetsHeader from '../atoms/WidgetsHeader'
import { StateContext } from '../contexts/StateContext'
import { userProfileData } from '../data/dummy'

const UserProfile = () => {
	const { currentMode, currentColor } = useContext(StateContext)

	let bgColor = currentMode === 'Dark' ? 'rgb(32, 35, 42)' : '#fff'
	let color = currentMode === 'Dark' ? '#fff' : 'rgb(32, 35, 42)'

	return (
		<div
			className='flex flex-col justify-between fixed md:right-8 md:top-16 md:w-80 md:h-4/6 h-3/4 w-3/4 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 bg-white z-10 rounded-tl-md rounded-bl-md rounded-br-md p-2'
			style={{
				backgroundColor: bgColor,
				borderWidth: '.1rem',
				borderStyle: 'solid',
				borderColor: currentMode === 'Dark' ? '#3b3b3b' : '#cccccc',
			}}
		>
			<WidgetsHeader headerText='User Profile' widgetType={'userProfile'} />

			<div className='flex my-2 px-3 gap-4'>
				<img
					className='w-24 h-24 rounded-full'
					src='https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg'
					alt='Profile'
				/>
				<div className='flex flex-col justify-center'>
					<h5 className='font-bold text-sm' style={{ color: color }}>
						Markiian Berehovskyi
					</h5>
					<p className='text-xs text-gray-600'>Administrator</p>
					<span className='text-xs' style={{ color: color }}>
						belongtomars@gmail.com
					</span>
				</div>
			</div>

			<div className='h-2/3 p-3 mb-4'>
				{userProfileData.map((el, index) => (
					<div
						className='flex items-center gap-4 pt-2 pb-3 mt-2 border-b-gray-500/50 border-b-1'
						key={index}
					>
						<div
							className='text-lg p-3 rounded-full'
							style={{ color: el.iconColor, backgroundColor: el.iconBg }}
						>
							{el.icon}
						</div>
						<div>
							<h6 className='font-bold text-xs' style={{ color: color }}>
								{el.title}
							</h6>
							<span className='mb-4 text-gray-400 text-xs'>{el.desc}</span>
						</div>
					</div>
				))}
			</div>

			<WidgetButton
				bgColor={currentColor}
				borderRadius='.5rem'
				color='#fff'
				size='xs'
				text='Logout'
				width='100%'
			/>
		</div>
	)
}

export default UserProfile
