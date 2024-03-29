import {
	ColorPickerComponent,
	ColorPickerEventArgs,
} from '@syncfusion/ej2-react-inputs'
import { useContext } from 'react'
import { Header } from '../components'
import { StateContext } from '../contexts/StateContext'

const ColorPicker = () => {
	const onChange = (args: ColorPickerEventArgs) => {
		const preview = document.getElementById('preview')
		if (preview) {
			preview.style.backgroundColor = args.currentValue.hex
		}
	}

	const { currentMode } = useContext(StateContext)

	return (
		<div
			className='m-4 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-xl drop-shadow-md'
			style={{
				backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff',
				color: currentMode === 'Dark' ? '#fff' : '#33373E',
			}}
		>
			<Header category='App' title='Color Picker' />
			<div className='text-center'>
				<div id='preview' />
				<div className='flex items-center justify-center gap-20 flex-wrap'>
					<div>
						<p className='mb-4 mt-2 text-2xl font-semibold'>Inline Palette</p>
						<ColorPickerComponent
							id='inline-palette'
							mode='Palette'
							modeSwitcher={false}
							inline
							showButtons={false}
							change={onChange}
						/>
					</div>
					<div>
						<p className='mb-4 mt-2 text-2xl font-semibold'>Inline Picker</p>
						<ColorPickerComponent
							id='inline-palette'
							mode='Picker'
							modeSwitcher={false}
							inline
							showButtons={false}
							change={onChange}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ColorPicker
