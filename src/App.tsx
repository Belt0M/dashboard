import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useContext } from 'react'
import './App.scss'
import { Navbar, Sidebar } from './components'
import { StateContext } from './contexts/StateContext'
import {
	Area,
	Bar,
	Calendar,
	ColorMapping,
	ColorPicker,
	Customers,
	ECommerce,
	Editor,
	Employees,
	Financial,
	Kanban,
	Line,
	Orders,
	Pie,
	Pyramid,
	Stacked,
} from './pages'

const App = () => {
	const { activeMenu } = useContext(StateContext)

	return (
		<div>
			<BrowserRouter>
				<div className='flex dark:bg-main-dark-bg'>
					{/* Settings rounded fixed button */}
					<div className='fixed right-4 bottom-4' style={{ zIndex: 1000 }}>
						<TooltipComponent content='Settings' position='TopLeft'>
							<button
								type='button'
								className='text-3xl hover:drop-shadow-lg p-3 text-white rounded-full'
								style={{ backgroundColor: 'blue' }}
							>
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>

					{/* Sidebar */}
					{activeMenu ? (
						<div className='sidebar fixed w-72 bg-white dark:bg-secondary-dark-bg'>
							<Sidebar />
						</div>
					) : (
						<div className='w-0 dark:bg-secondary-dark-bg'>
							<Sidebar />
						</div>
					)}

					{/* Navbar */}
					<div
						className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
							activeMenu ? 'md:ml-72' : 'flex-2'
						}`}
					>
						<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
							<Navbar />
						</div>

						{/* Routes */}
						<div>
							<Routes>
								{/* Dashboard */}
								<Route path='/' element={<ECommerce />} />
								<Route path='/ecommerce' element={<ECommerce />} />

								{/* Pages */}
								<Route path='/orders' element={<Orders />} />
								<Route path='/employees' element={<Employees />} />
								<Route path='/customers' element={<Customers />} />

								{/* Apps */}
								<Route path='/calendar' element={<Calendar />} />
								<Route path='/kanban' element={<Kanban />} />
								<Route path='/editor' element={<Editor />} />
								<Route path='/color-picker' element={<ColorPicker />} />

								{/* Charts */}
								<Route path='/line' element={<Line />} />
								<Route path='/area' element={<Area />} />
								<Route path='/bar' element={<Bar />} />
								<Route path='/pie' element={<Pie />} />
								<Route path='/financial' element={<Financial />} />
								<Route path='/color-mapping' element={<ColorMapping />} />
								<Route path='/pyramid' element={<Pyramid />} />
								<Route path='/stacked' element={<Stacked />} />
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
