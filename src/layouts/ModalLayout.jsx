import React, { useContext } from 'react'
import { UiContext } from '../context/ui/UiContext'

export const ModalLayout = ({ children }) => {

    const { isOpen, openAndCloseModal } = useContext(UiContext)

    return (
        <div
            className={`${isOpen ? 'block' : 'hidden'} fixed w-full h-[100vh] top-0 left-0 bg-[#00000091] z-20`}
        >
            <div className="flex justify-center items-center relative w-full h-full">
                <div
                    className={`bg-white flex flex-col items-center w-[90%] ss:w-[75%] sm:w-[60%] md:w-[50%] lg:w-[40%] rounded-md p-[1px]`}
                >
                    {children}
                </div>

                <div className="absolute top-0 right-0 p-5 cursor-pointer" onClick={openAndCloseModal}>
                    <i className="fa-solid fa-xmark text-white text-3xl"></i>
                </div>
            </div>
        </div>
    )
}
