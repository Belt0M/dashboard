import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React, { useContext, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiNotification3Line } from 'react-icons/ri'
import { StateContext } from '../contexts/StateContext'
import avatar from '../data/avatar.jpg'
import Cart from './Cart'
import Chat from './Chat'
import Notification from './Notification'
import UserProfile from './UserProfile'

interface NavButtonProps {
	title: string
	customFunc: () => void
	color: string
	icon: React.ReactNode
	dotColor?: string
}

const NavButton = ({
	title,
	customFunc,
	color,
	icon,
	dotColor,
}: NavButtonProps) => (
	<TooltipComponent content={title} position='BottomCenter'>
		<button
			type='button'
			style={{ color }}
			onClick={customFunc}
			className='relative text-xl rounded-full p-3 hover:bg-light-gray'
		>
			<span
				className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
				style={{ background: dotColor }}
			></span>
			{icon}
		</button>
	</TooltipComponent>
)

const Navbar = () => {
	const {
		activeMenu,
		setActiveMenu,
		isClicked,
		handleClick,
		screenSize,
		setScreenSize,
		currentColor,
	} = useContext(StateContext)

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth)

		window.addEventListener('resize', handleResize)

		handleResize()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (screenSize && screenSize < 900) {
			setActiveMenu(false)
		} else {
			setActiveMenu(true)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [screenSize])

	return (
		<div className='flex relative justify-between p-2 md:mx-6'>
			<NavButton
				title='Menu'
				customFunc={() => setActiveMenu(!activeMenu)}
				color={currentColor}
				icon={<AiOutlineMenu />}
			/>
			<div className='flex'>
				<NavButton
					color={currentColor}
					customFunc={() => handleClick('cart')}
					icon={<FiShoppingCart />}
					title='Cart'
				/>
				<NavButton
					color={currentColor}
					customFunc={() => handleClick('chat')}
					icon={<BsChatLeft />}
					title='Chat'
					dotColor='#03C9D7'
				/>
				<NavButton
					color={currentColor}
					customFunc={() => handleClick('notification')}
					icon={<RiNotification3Line />}
					title='Notification'
					dotColor='#03C9D7'
				/>
				<TooltipComponent content='Profile' position='BottomCenter'>
					<div
						className='flex items-center gap-2 hover:bg-light-gray rounded-lg cursor-pointer p-1'
						onClick={() => handleClick('userProfile')}
					>
						<img src={avatar} alt='Avatar' className='w-8 h-8 rounded-full' />
						<p className='text-gray-500 text-13'>
							<span>Hi, </span>
							<span className='font-bold ml-1'>BeltoM</span>
						</p>
						<MdKeyboardArrowDown />
					</div>
				</TooltipComponent>
				{isClicked.cart && <Cart />}
				{isClicked.chat && <Chat />}
				{isClicked.notification && <Notification />}
				{isClicked.userProfile && <UserProfile />}
			</div>
		</div>
	)
}

export default Navbar
