import {
	Agenda,
	Day,
	DragAndDrop,
	Inject,
	Month,
	Resize,
	ScheduleComponent,
	Week,
	WorkWeek,
} from '@syncfusion/ej2-react-schedule'
import { useContext, useEffect } from 'react'
import { Header } from '../components'
import { StateContext } from '../contexts/StateContext'
import { scheduleData } from '../data/dummy'

const Calendar = () => {
	const { currentMode } = useContext(StateContext)

	useEffect(() => {
		const table = document.querySelector('.e-schedule') as HTMLElement
		if (currentMode === 'Dark') {
			table.classList.add('dark')
		} else {
			table.classList.remove('dark')
		}
	}, [currentMode])

	return (
		<div
			className='m-4 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-xl drop-shadow-md'
			style={{ backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff' }}
		>
			<Header category='App' title='Calendar' />
			<ScheduleComponent
				height='650px'
				eventSettings={{ dataSource: scheduleData }}
				selectedDate={new Date(2021, 0, 11)}
			>
				<Inject
					services={[Day, Month, Week, WorkWeek, Agenda, Resize, DragAndDrop]}
				/>
			</ScheduleComponent>
		</div>
	)
}

export default Calendar
