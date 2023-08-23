import {
	ColumnDirective,
	ColumnsDirective,
	GridComponent,
	Inject,
	Page,
	Search,
	Toolbar,
} from '@syncfusion/ej2-react-grids'
import { useContext, useEffect } from 'react'
import { Header } from '../components'
import { StateContext } from '../contexts/StateContext'
import { employeesData, employeesGrid } from '../data/dummy.js'

const Employees = () => {
	const { currentMode } = useContext(StateContext)

	useEffect(() => {
		const table = document.querySelector('.e-grid') as HTMLElement
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
			<Header category='Page' title='Employees' />
			<GridComponent
				dataSource={employeesData}
				allowPaging
				allowSorting
				toolbar={['Search']}
				width='auto'
			>
				<ColumnsDirective>
					{employeesGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Search, Toolbar]} />
			</GridComponent>
		</div>
	)
}

export default Employees
