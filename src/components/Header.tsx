interface IHeaderProps {
	category: string
	title: string
}

const Header = ({ category, title }: IHeaderProps) => {
	return (
		<div className='mb-10'>
			<p className='text-gray-400'>{category}</p>
			<p className='text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white'>
				{title}
			</p>
		</div>
	)
}

export default Header
