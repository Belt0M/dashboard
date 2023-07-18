import {
	ColumnDirective,
	ColumnsDirective,
	KanbanComponent,
} from '@syncfusion/ej2-react-kanban'
import { Header } from '../components'
import { kanbanData, kanbanGrid } from '../data/dummy'
const Kanban = () => {
	return (
		<div className='m-4 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-xl drop-shadow-md'>
			<Header category='App' title='Kanban' />
			<KanbanComponent
				id='kanban'
				dataSource={kanbanData}
				cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
				keyField='Status'
			>
				<ColumnsDirective>
					{kanbanGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
			</KanbanComponent>
		</div>
	)
}

export default Kanban
