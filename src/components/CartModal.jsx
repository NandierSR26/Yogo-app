import React, { useContext, useState } from 'react'
import { CartContext } from '../context/cart/CartContext'
import { UiContext } from '../context/ui/UiContext'
import { fixProductPrice } from '../helpers/fixProductPrice'
import { ModalLayout } from '../layouts/ModalLayout'

let fixedPrice
let dataProductCart;
export const CartModal = () => {

    const { product, addToCart, cart } = useContext(CartContext)
    const { openAndCloseModal } = useContext(UiContext)
    const [inputAmount, setInputAmount] = useState(1)
    if( product ) {
        fixedPrice = fixProductPrice( product.precio )
        dataProductCart = {
            id: product.id,
            product,
            amount: inputAmount,
            totalPrice: (fixedPrice * inputAmount)
        }
    }

    const addAmount = () => {
        setInputAmount(inputAmount + 1)
    }

    const subtractAmount = () => {
        if (inputAmount === 1) return
        setInputAmount(inputAmount - 1)
    }

    const handleInputChange = (e) => {
        setInputAmount(e.target.value)
    }

    return (
        <ModalLayout>
            <div className="title flex justify-between w-full px-10 my-5">
                <h2 className="text-xl font-semibold font-inter">{ product && product.nombre }</h2>
            </div>

            <div className="w-full px-10 mb-5">
                <h5 className="text-lg font-medium font-inter">Mensaje</h5>
                <textarea 
                    name="mensaje"
                    rows={5}
                    className="border-2 border-gray rounded-xl w-full p-2"
                    placeholder="escribe algun detalle"
                ></textarea>
            </div>

            <div className="w-full text-center mb-5">
                <p className="text-lg font-medium font-inter">Precio: <span className="text-red mr-2">{ product && (fixedPrice * inputAmount) }</span> X {inputAmount}</p>
            </div>

            <div className="flex justify-between flex-col xs:flex-row gap-5 mb-5 px-10 w-full">
                <div className="amount__buttons flex items-center justify-between gap-5">
                    <button 
                        className="bg-blue font-medium font-inter text-lg p-2 rounded-lg text-white"
                        onClick={subtractAmount}
                    >
                        - 1
                    </button>
                    <input 
                        type="number" 
                        name="amount"
                        min={0}
                        value={inputAmount}
                        contentEditable={false}
                        onChange={ handleInputChange }
                        className="h-full text-center px-2 outline-none pointer-events-none w-[60px]"
                    />
                    <button 
                        className="bg-blue font-medium font-inter text-lg p-2 rounded-lg text-white"
                        onClick={addAmount}
                    >
                        + 1
                    </button>
                </div>

                <button 
                    className="bg-primary px-4 py-1 text-lg font-medium text-white rounded-lg"
                    onClick={() => {
                        addToCart(dataProductCart)
                        openAndCloseModal()
                        setInputAmount(1)
                    }}
                >
                    Agregar
                </button>
            </div>
        </ModalLayout>
    )
}
