import { Header, LineChart } from '../../components'

const Line = () => {
	return (
		<div className='m-4 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-xl drop-shadow-md dark:bg-secondary-dark-bg'>
			<Header category='Chart' title='Inflation Rate' />
			<div className='w-full'>
				<LineChart />
			</div>
		</div>
	)
}

export default Line
