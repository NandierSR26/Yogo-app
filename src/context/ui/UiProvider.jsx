import React, { useEffect, useState } from 'react'
import { UiContext } from './UiContext'

export const UiProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const openAndCloseModal = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    useEffect(() => {
        setIsOpen(false)
    }, [])

    return (
        <UiContext.Provider value={{
            isOpen,
            openAndCloseModal
        }}>
            { children }
        </UiContext.Provider>
    )
}
