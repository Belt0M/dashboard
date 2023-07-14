import {
	ColumnDirective,
	ColumnsDirective,
	GridComponent,
	Inject,
	Page,
	Search,
	Toolbar,
} from '@syncfusion/ej2-react-grids'
import { Header } from '../components'
import { employeesData, employeesGrid } from '../data/dummy.js'

const Employees = () => {
	return (
		<div className='m-4 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-xl drop-shadow-md'>
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
