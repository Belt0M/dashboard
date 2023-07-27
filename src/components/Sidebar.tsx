import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useContext } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { SiShopware } from 'react-icons/si'
import { Link, NavLink } from 'react-router-dom'
import { StateContext } from '../contexts/StateContext'
import { links } from '../data/dummy'
const Sidebar = () => {
	const { activeMenu, setActiveMenu, screenSize, currentColor } =
		useContext(StateContext)

	const handleCLoseSidebar = () => {
		if (activeMenu && screenSize && screenSize < 900) {
			setActiveMenu(false)
		}
	}

	const activeLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-md text-white text-md m-2`
	const normalLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 transition'

	return (
		<div className='ml-3 overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10 h-screen'>
			{activeMenu && (
				<>
					<div className='flex justify-between items-center'>
						<Link
							to='/'
							onClick={handleCLoseSidebar}
							className='flex items-center ml-3 pt-7 pb-6 gap-2 font-extrabold text-xl dark:text-white text-slate-900'
						>
							<SiShopware />
							<span>BeltoM</span>
						</Link>
						<TooltipComponent content='Menu' position='BottomCenter'>
							<button
								className='text-xl p-3 rounded-full hover:bg-light-gray transition block md:hidden'
								onClick={() => setActiveMenu(!activeMenu)}
								type='button'
							>
								<MdOutlineCancel />
							</button>
						</TooltipComponent>
					</div>
					<div className='mt-10'>
						{links.map(el => (
							<div key={el.title}>
								<p className='uppercase text-gray-400 m-3 mt-4'>{el.title}</p>

								{el.links.map(link => (
									<NavLink
										key={link.name}
										to={`/${link.name}`}
										onClick={handleCLoseSidebar}
										style={({ isActive }) => ({
											backgroundColor: isActive ? currentColor : '',
										})}
										className={({ isActive }) =>
											isActive ? activeLink : normalLink
										}
									>
										{link.icon}
										<span className='capitalize'>{link.name}</span>
									</NavLink>
								))}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	)
}

export default Sidebar
