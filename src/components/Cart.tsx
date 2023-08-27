import { useContext, useEffect, useRef } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { StateContext } from '../contexts/StateContext'
import { cartData } from '../data/dummy'

const Cart = () => {
	const { currentMode, currentColor, handleClick } = useContext(StateContext)
	let bgColor = currentMode === 'Dark' ? 'rgb(32, 35, 42)' : '#fff'
	let color = currentMode === 'Dark' ? '#fff' : 'rgb(32, 35, 42)'

	const refCart = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const sidebar = document.querySelector('.sidebar')
		const handleClickOutside = (e: MouseEvent) => {
			if (
				!refCart.current?.contains(e.target as Node) &&
				!sidebar?.contains(e.target as Node)
			) {
				handleClick('cart')
			}
		}
		document.addEventListener('click', handleClickOutside, true)

		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [handleClick])

	return (
		<div className='fixed w-full h-full bg-secondary-dark-bg/60 left-0 top-0 z-10'>
			<aside
				className='fixed sm:w-2/5 xs:w-1/2 w-full lg:w-1/3 h-full right-0 top-0 py-6 px-4'
				style={{
					backgroundColor: bgColor,
					borderWidth: '.2rem',
					borderStyle: 'solid',
					borderColor: currentMode === 'Dark' ? '#3b3b3b' : '#cccccc',
				}}
				ref={refCart}
			>
				{/* Header */}
				<div className='flex justify-between items-center pb-2'>
					<h3 className={`text-md pl-1 font-bold`} style={{ color: color }}>
						Shopping Cart
					</h3>
					<button
						className='rounded-full p-3 hover:shadow-md transition-shadow text-xl'
						style={{ color: color }}
						onClick={() => handleClick('cart')}
					>
						<MdOutlineCancel />
					</button>
				</div>

				{/* Cart items */}
				<div className='max-h-96 min-h-390 mt-4'>
					{cartData.map((item, index) => (
						<div
							key={index}
							className='flex items-center justify-between border-b-grey border-b-2 py-4 px-2'
						>
							<img
								src={item.image}
								alt={item.name}
								className='w-20 h-20 rounded-full'
							/>
							<div className='w-3/5 md:w-2/3' style={{ color: color }}>
								<h4 className={`font-bold text-sm`}>{item.name}</h4>
								<span className='text-xs'>{item.category}</span>
								<div className='mt-2 flex items-center gap-4'>
									<span className='font-bold text-sm'>{item.price}</span>
									<div className='flex'>
										<button className='w-8 h-8 hover:text-red-500 transition-all'>
											-
										</button>
										<input
											type='number'
											className='border-2 border-gray-200 w-8 h-8 focus:outline-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center text-sm rounded-md'
											value={0}
											onChange={() => {}}
											style={{ backgroundColor: bgColor }}
										/>
										<button className='w-8 h-8 hover:text-green-500 transition-all'>
											+
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Place Order */}
				<div className='mt-8'>
					<div className='flex justify-between pb-4' style={{ color: color }}>
						<span>Sub Total</span>
						<h6 className='font-bold'>$890</h6>
					</div>
					<div className='flex justify-between pb-6' style={{ color: color }}>
						<span>Total</span>
						<h6 className='font-bold'>$890</h6>
					</div>
					<button
						className={`w-full h-12 rounded-lg text-white`}
						style={{ backgroundColor: currentColor }}
					>
						Place Order
					</button>
				</div>
			</aside>
		</div>
	)
}

export default Cart
