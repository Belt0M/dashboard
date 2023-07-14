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
import { Header } from '../components'
import { customersData, customersGrid } from '../data/dummy'

const Customers = () => {
	return (
		<div className='m-4 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-xl drop-shadow-md'>
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
