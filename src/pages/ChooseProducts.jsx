import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CardList } from '../components/CardList'
import { CartModal } from '../components/CartModal'
import { Categories } from '../components/Categories'
import { Header } from '../components/Header'
import { BusinessContext } from '../context/Business/BusinessContext'
import { CartContext } from '../context/cart/CartContext'

export const ChooseProducts = () => {
    let cartPrice = 0;
    let productsAmount = 0;

    const { cartSpecs } = useContext(CartContext);
    const { businessCategories, getBusinessCategories, businessProductsList } = useContext(BusinessContext)
    const { site } = useParams();
    const navigate = useNavigate()
    
    useEffect(() => {
        getBusinessCategories(site)
    }, [site])

    return (
        <main className="relative">
            <div className="flex flex-col justify-start items-start h-[100vh] w-full">
                <Header title="Menu" itemLeft />
                {
                    (businessCategories.length > 0) && (
                        <Categories items={businessCategories} />
                    )
                }
                <main className="flex-1 w-full overflow-scroll">
                    <CardList cardsData={businessProductsList} icon={'add-to-cart'} pointerEvents={false} />
                </main>
                <div className="see__cart px-3 sm:px-10 mb-3 w-full bg-transparent">
                    <div className="flex justify-between items-center bottom-0 w-full bg-blue px-3 py-3 rounded-lg">
                        <div className="preview__detail flex flex-col flex-1 items-start justify-between">
                            <p className="price text-[1rem] xs:text-[1.2rem] text-white font-inter font-semibold">$ {cartSpecs.price}</p>
                            <p className="amount text-[.6rem] xs:text-[.8rem] text-white font-inter font-normal">{cartSpecs.amount} productos</p>
                        </div>
                        <button
                            className="see__cart__button text-[1rem] xs:text-[1.2rem] bg-white text-blue font-inter font-semibold px-8 py-2 xs:px-16 xs:py-2 rounded-lg"
                            onClick={() => navigate(`/cart`)}
                        >
                            Ver Carrito
                        </button>

                    </div>
                </div>
            </div>

            <CartModal />
        </main>
    )
}
