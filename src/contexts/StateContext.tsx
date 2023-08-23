import React, { createContext, useState } from 'react'

export interface IInitState {
	chat: boolean
	cart: boolean
	userProfile: boolean
	notification: boolean
}

const initialState: IInitState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
}

interface IStateContext {
	activeMenu: boolean
	setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>
	isClicked: IInitState
	setIsClicked: React.Dispatch<React.SetStateAction<IInitState>>
	handleClick: (clicked: keyof IInitState) => void
	setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>
	screenSize: number | undefined
	currentColor: string
	setCurrentColor: React.Dispatch<React.SetStateAction<string>>
	currentMode: string
	setCurrentMode: React.Dispatch<React.SetStateAction<string>>
	themeSettings: boolean
	setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>
	setMode: (e: React.ChangeEvent<HTMLInputElement>) => void
	setColor: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const StateContext = createContext<IStateContext>({
	activeMenu: true,
	setActiveMenu: () => {},
	isClicked: initialState,
	setIsClicked: () => {},
	handleClick: () => {},
	setScreenSize: () => {},
	screenSize: undefined,
	currentColor: '#03C9D7',
	setCurrentColor: () => {},
	currentMode: 'Light',
	setCurrentMode: () => {},
	themeSettings: false,
	setThemeSettings: () => {},
	setMode: () => {},
	setColor: () => {},
})

export const ContextProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [activeMenu, setActiveMenu] = useState<boolean>(true)
	const [isClicked, setIsClicked] = useState<IInitState>(initialState)
	const [screenSize, setScreenSize] = useState<number | undefined>(undefined)
	const [currentColor, setCurrentColor] = useState<string>('#03C9D7')
	const [currentMode, setCurrentMode] = useState<string>('Light')
	const [themeSettings, setThemeSettings] = useState(false)

	const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentMode(e.target.value)

		localStorage.setItem('themeMode', e.target.value)

		setThemeSettings(false)
	}

	const setColor = (e: React.MouseEvent<HTMLButtonElement>) => {
		setCurrentColor(e.currentTarget.value)

		localStorage.setItem('colorMode', e.currentTarget.value)

		setThemeSettings(false)
	}

	const handleClick = (clicked: keyof IInitState) => {
		setIsClicked({ ...initialState, [clicked]: !isClicked[clicked] })
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
				currentColor,
				currentMode,
				setCurrentColor,
				setCurrentMode,
				setThemeSettings,
				themeSettings,
				setColor,
				setMode,
			}}
		>
			{children}
		</StateContext.Provider>
	)
}
