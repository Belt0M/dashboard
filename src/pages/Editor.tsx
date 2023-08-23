import {
	HtmlEditor,
	Inject,
	RichTextEditorComponent,
	Toolbar,
} from '@syncfusion/ej2-react-richtexteditor'
import { useContext, useEffect } from 'react'
import { Header } from '../components'
import { StateContext } from '../contexts/StateContext'

const Editor = () => {
	const toolbarSettings: object = {
		items: [
			'Bold',
			'Italic',
			'Underline',
			'StrikeThrough',
			'FontName',
			'FontSize',
			'FontColor',
			'BackgroundColor',
			'LowerCase',
			'UpperCase',
			'|',
			'Formats',
			'Alignments',
			'Outdent',
			'Indent',
			'|',
			'Image',
			'|',
			'Print',
			'SourceCode',
			'FullScreen',
			'|',
			'Undo',
			'Redo',
		],
	}

	const { currentMode } = useContext(StateContext)

	useEffect(() => {
		const table = document.querySelector('.e-richtexteditor') as HTMLElement
		if (currentMode === 'Dark') {
			table.classList.add('dark')
		} else {
			table.classList.remove('dark')
		}
	}, [currentMode])

	return (
		<div
			className='m-4 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-xl drop-shadow-md md:max-w-6xl max-w-2xl'
			style={{ backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff' }}
		>
			<Header category='App' title='Editor' />
			<RichTextEditorComponent
				toolbarSettings={toolbarSettings}
				height='400px'
				style={{ maxWidth: '100%' }}
			>
				<Inject services={[Toolbar, HtmlEditor]} />
			</RichTextEditorComponent>
		</div>
	)
}

export default Editor
