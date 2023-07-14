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
import { Header } from '../components'
import { scheduleData } from '../data/dummy'

const Calendar = () => {
	return (
		<div className='m-4 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-xl drop-shadow-md'>
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
