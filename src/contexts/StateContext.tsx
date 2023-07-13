import React, { createContext, useState } from 'react'

interface IInitState {
	chat: boolean
	cart: boolean
	userProfile: boolean
	notification: boolean
}

interface IStateContext {
	activeMenu: boolean
	setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>
	isClicked: IInitState
	setIsClicked: React.Dispatch<React.SetStateAction<IInitState>>
	handleClick: (clicked: keyof IInitState) => void
	setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>
	screenSize: number | undefined
}

const initialState: IInitState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
}

export const StateContext = createContext<IStateContext>({
	activeMenu: true,
	setActiveMenu: () => {},
	isClicked: initialState,
	setIsClicked: () => {},
	handleClick: () => {},
	setScreenSize: () => {},
	screenSize: undefined,
})

export const ContextProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [activeMenu, setActiveMenu] = useState<boolean>(true)
	const [isClicked, setIsClicked] = useState<IInitState>(initialState)
	const [screenSize, setScreenSize] = useState<number | undefined>(undefined)

	const handleClick = (clicked: keyof IInitState) => {
		setIsClicked({ ...initialState, [clicked]: true })
	}

	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screenSize,
				setScreenSize,
			}}
		>
			{children}
		</StateContext.Provider>
	)
}
