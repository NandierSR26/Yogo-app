import React, { useEffect, useState } from 'react'
import { UiContext } from './UiContext'

export const UiProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [image, setImage] = useState('')

    const openAndCloseModal = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    const setImageModal = ( url ) => {
        setImage(url)
    }

    useEffect(() => {
        setIsOpen(false)
    }, [])

    return (
        <UiContext.Provider value={{
            isOpen,
            openAndCloseModal,
            image,
            setImageModal
        }}>
            { children }
        </UiContext.Provider>
    )
}
