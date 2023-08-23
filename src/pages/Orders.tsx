import {
	ColumnDirective,
	ColumnsDirective,
	ContextMenu,
	Edit,
	ExcelExport,
	Filter,
	GridComponent,
	Inject,
	Page,
	PdfExport,
	Resize,
	Sort,
} from '@syncfusion/ej2-react-grids'
import { useContext, useEffect } from 'react'
import { Header } from '../components'
import { StateContext } from '../contexts/StateContext'
import { ordersData, ordersGrid } from '../data/dummy.js'

const Orders = () => {
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
			className='m-4 mt-24 md:m-10 p-2 md:p-10 rounded-xl drop-shadow-md'
			style={{ backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff' }}
		>
			<Header category='Page' title='Orders' />
			<GridComponent
				id='gridcomp'
				dataSource={ordersData}
				allowPaging
				allowSorting
			>
				<ColumnsDirective>
					{ordersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject
					services={[
						Resize,
						ExcelExport,
						Filter,
						Page,
						Sort,
						ContextMenu,
						Edit,
						PdfExport,
					]}
				/>
			</GridComponent>
		</div>
	)
}

export default Orders
