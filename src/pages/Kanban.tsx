import {
	ColumnDirective,
	ColumnsDirective,
	KanbanComponent,
} from '@syncfusion/ej2-react-kanban'
import { useContext, useEffect } from 'react'
import { Header } from '../components'
import { StateContext } from '../contexts/StateContext'
import { kanbanData, kanbanGrid } from '../data/dummy'
const Kanban = () => {
	const { currentMode } = useContext(StateContext)

	useEffect(() => {
		const table = document.querySelector('#kanban') as HTMLElement
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
