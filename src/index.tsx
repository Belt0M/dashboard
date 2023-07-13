import ReactDOM from 'react-dom'
import App from './App'
import { ContextProvider } from './contexts/StateContext'
import './index.scss'

ReactDOM.render(
	<ContextProvider>
		<App />
	</ContextProvider>,
	document.getElementById('root') as HTMLElement
)
