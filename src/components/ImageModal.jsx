import React from 'react'
import { useContext } from 'react'
import { UiContext } from '../context/ui/UiContext'
import { ModalLayout } from '../layouts/ModalLayout'

export const ImageModal = () => {

    const { image } = useContext(UiContext)

    return (
        <ModalLayout>
            <img 
                src={image} 
                alt={image} 
                className="w-full h-full rounded-md"
            />
        </ModalLayout>
    )
}
