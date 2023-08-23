import {
	ColumnDirective,
	ColumnsDirective,
	Edit,
	Filter,
	GridComponent,
	Inject,
	Page,
	Selection,
	Sort,
	Toolbar,
} from '@syncfusion/ej2-react-grids'
import { useContext, useEffect } from 'react'
import { Header } from '../components'
import { StateContext } from '../contexts/StateContext'
import { customersData, customersGrid } from '../data/dummy'

const Customers = () => {
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
			<Header category='Page' title='Customers' />
			<GridComponent
				dataSource={customersData}
				toolbar={['Delete']}
				allowPaging
				allowSorting
				editSettings={{ allowDeleting: true, allowEditing: true }}
				width='auto'
			>
				<ColumnsDirective>
					{customersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Filter, Sort, Toolbar, Selection, Edit]} />
			</GridComponent>
		</div>
	)
}

export default Customers
