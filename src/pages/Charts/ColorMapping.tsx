import { MapsComponent } from '@syncfusion/ej2-react-maps'
import { Header } from '../../components'

const ColorMapping = () => {
	return (
		<div className='m-4 mt-24 md:m-10 p-4 md:p-10 bg-white rounded-xl drop-shadow-md dark:bg-secondary-dark-bg'>
			<Header category='Map' title='Average Salary of US States' />
			<div className='w-full'>
				<MapsComponent></MapsComponent>
			</div>
			.
		</div>
	)
}

export default ColorMapping
