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
import { Header } from '../components'
import { ordersData, ordersGrid } from '../data/dummy.js'

const Orders = () => {
	return (
		<div className='m-6 mt-12 md:m-10 p-6 md:p-10 bg-white rounded-xl drop-shadow-md'>
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
