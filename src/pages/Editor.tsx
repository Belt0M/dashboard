import {
	HtmlEditor,
	Inject,
	RichTextEditorComponent,
	Toolbar,
} from '@syncfusion/ej2-react-richtexteditor'
import { Header } from '../components'

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
	return (
		<div className='m-4 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-xl drop-shadow-md'>
			<Header category='App' title='Editor' />
			<RichTextEditorComponent toolbarSettings={toolbarSettings}>
				<Inject services={[Toolbar, HtmlEditor]} />
			</RichTextEditorComponent>
		</div>
	)
}

export default Editor
