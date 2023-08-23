import { useContext } from 'react'
import { GoDotFill } from 'react-icons/go'
import { Button, SparkLine, Stacked } from '../components'
import { StateContext } from '../contexts/StateContext'
import { SparklineAreaData, earningData } from '../data/dummy'

const Ecommerce = () => {
	const { currentColor, currentMode } = useContext(StateContext)

	return (
		<div className='mt-12'>
			<div className='flex flex-wrap lg:flex-nowrap justify-center'>
				<div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-48 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
					<div className='flex justify-between items-center'>
						<div
							className='px-5 py-2 rounded-lg text-left'
							style={{
								backgroundColor: currentMode === 'Dark' ? '#33373EDD' : '#fff',
							}}
						>
							<p className='font-bold text-gray-400'>Earnings</p>
							<p className='text-2xl'>$64,327.78</p>
						</div>
					</div>
					<div className='mt-3'>
						<Button
							bgColor={currentColor}
							borderRadius='10px'
							color='white'
							size='md'
							text='Download'
						/>
					</div>
				</div>
				<div className='flex items-center justify-center flex-wrap m-3 gap-1'>
					{earningData.map(el => (
						<div
							key={el.title}
							className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-44 p-4 pt-9 rounded-2xl drop-shadow-md'
						>
							<button
								type='button'
								style={{ color: el.iconColor, backgroundColor: el.iconBg }}
								className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
							>
								{el.icon}
							</button>
							<p className='mt-3'>
								<span className='text-lg font-semibold'>{el.amount}</span>
								<span
									className={'text-sm ml-2'}
									style={{
										color: parseInt(el.percentage) < 0 ? 'red' : 'green',
									}}
								>
									{el.percentage}
								</span>
							</p>
							<p className='text-sm text-gray-400 mt-1'>{el.title}</p>
						</div>
					))}
				</div>
			</div>

			<div className='flex gap-10 flex-wrap justify-center'>
				<div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-full drop-shadow-md'>
					<div className='flex justify-between'>
						<p className='font-semibold'>Revenue Updates</p>
						<div className='flex items-center gap-4'>
							<p
								className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'
								style={{ color: currentMode === 'Dark' ? '#fff' : '' }}
							>
								<span>
									<GoDotFill />
								</span>
								<span>Expense</span>
							</p>
							<p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
								<span>
									<GoDotFill />
								</span>
								<span>Budget</span>
							</p>
						</div>
					</div>
					<div className='flex gap-10 mt-10 flex-wrap justify-center'>
						<div className='border-r-1 border-color m-4 pr-10'>
							<div>
								<p>
									<span className='font-semibold text-3sxl'>$83,568</span>
									<span className='p-1.5 hover:drop-shadow-xl bg-green-400 ml-3 text-white rounded-full cursor-pointer text-xs'>
										23%
									</span>
								</p>
								<p className='text-gray-500 mt-1'>Budget</p>
							</div>
							<div className='mt-8'>
								<p>
									<span className='font-semibold text-3sxl'>$45,567</span>
								</p>
								<p className='text-gray-500 mt-1'>Expense</p>
							</div>
							<div className='mt-5'>
								<SparkLine
									currentColor='blue'
									id='line-sparkline'
									type='Line'
									height='80px'
									width='250px'
									data={SparklineAreaData}
									color={currentColor}
								/>
							</div>
							<div className='mt-10'>
								<Button
									bgColor={currentColor}
									borderRadius='10px'
									color='white'
									text='Download Report'
									size='sm'
								/>
							</div>
						</div>
						<div>
							<Stacked width='320px' height='360px' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Ecommerce
