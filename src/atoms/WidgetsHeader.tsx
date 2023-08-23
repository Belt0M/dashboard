import { useContext } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { IInitState, StateContext } from '../contexts/StateContext'

interface IWidgetsHeader {
	widgetType: keyof IInitState
	headerText: string
}

const WidgetsHeader = ({ widgetType, headerText }: IWidgetsHeader) => {
	const { currentMode, handleClick } = useContext(StateContext)

	let color = currentMode === 'Dark' ? '#fff' : 'rgb(32, 35, 42)'

	return (
		<div className='flex justify-between items-center pb-2'>
			<h3 className={`text-md pl-3 font-bold`} style={{ color: color }}>
				{headerText}
			</h3>
			<button
				className='rounded-full p-3 hover:shadow-md transition-shadow text-xl'
				style={{ color: color }}
				onClick={() => handleClick(widgetType)}
			>
				<MdOutlineCancel />
			</button>
		</div>
	)
}

export default WidgetsHeader
