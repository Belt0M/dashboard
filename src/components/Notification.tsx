import { useContext } from 'react'
import WidgetButton from '../atoms/WidgetButton'
import WidgetsHeader from '../atoms/WidgetsHeader'
import { StateContext } from '../contexts/StateContext'
import { notificationsData } from '../data/dummy'

const Notification = () => {
	const { currentMode, currentColor } = useContext(StateContext)

	let bgColor = currentMode === 'Dark' ? 'rgb(32, 35, 42)' : '#fff'
	let color = currentMode === 'Dark' ? '#fff' : 'rgb(32, 35, 42)'

	return (
		<div
			className='flex flex-col justify-between fixed md:right-40 md:top-16 md:w-72 md:h-3/5 h-3/4 w-3/4 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 bg-white z-10 rounded-tl-md rounded-bl-md rounded-br-md p-2'
			style={{
				backgroundColor: bgColor,
				borderWidth: '.1rem',
				borderStyle: 'solid',
				borderColor: currentMode === 'Dark' ? '#3b3b3b' : '#cccccc',
			}}
		>
			<WidgetsHeader headerText='Notifications' widgetType='notification' />
			<div className='h-2/3 p-3 mb-9'>
				{notificationsData.map((el, index) => (
					<div
						className='flex items-center gap-4 pt-2 pb-3 mt-2 border-b-gray-500/50 border-b-1'
						key={index}
					>
						<img
							src={el.image}
							alt={el.desc}
							className='w-8 h-8 rounded-full'
						/>
						<div>
							<h6 className='font-bold text-xs' style={{ color: color }}>
								{el.desc}
							</h6>
							<span className='mb-4 text-gray-400 text-xs'>{el.message}</span>
						</div>
					</div>
				))}
			</div>
			<WidgetButton
				bgColor={currentColor}
				borderRadius='.5rem'
				color='#fff'
				size='xs'
				text='See all messages'
				width='100%'
			/>
		</div>
	)
}

export default Notification
