import React, { useContext } from 'react'
import { UiContext } from '../context/ui/UiContext'

export const ModalLayout = ({ children }) => {

    const { isOpen, openAndCloseModal } = useContext(UiContext)

    return (
        <div 
            className={`main__container absolute ${isOpen ? 'flex' : 'hidden'} justify-center items-center w-[100vw] h-[100vh] top-0 left-0 bg-[#00000091] z-20`}
        >
            <div className="form__container bg-white flex flex-col items-center w-[90%] ss:w-[75%] sm:w-[60%] md:w-[50%] lg:w-[40%] rounded-xl">
                { children }
            </div>
        </div>
    )
}
