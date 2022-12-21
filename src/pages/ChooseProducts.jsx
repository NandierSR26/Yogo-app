import React from 'react'
import { CardList } from '../components/CardList'
import { Categories } from '../components/Categories'
import { Header } from '../components/Header'

export const ChooseProducts = () => {
    return (
        <div className="flex flex-col justify-start items-start h-[100vh] w-full">
            <Header title="Mesa #1" itemLeft itemRight={'next'} />
            <Categories />
            <main className="flex-1 overflow-scroll">
                <CardList icon={'add-to-cart'} />
            </main>
            <div className="see__cart px-3 sm:px-10 mb-3 w-full bg-transparent">
                <div className="flex justify-between items-center bottom-0 w-full bg-blue px-3 py-3 rounded-lg">
                    <div className="preview__detail flex flex-col flex-1 items-start justify-between">
                        <p className="price text-[1rem] xs:text-[1.2rem] text-white font-inter font-semibold">$0</p>
                        <p className="amount text-[.6rem] xs:text-[.8rem] text-white font-inter font-normal">0 productos</p>
                    </div>
                    <button className="see__cart__button text-[1rem] xs:text-[1.2rem] bg-white text-blue font-inter font-semibold px-8 py-2 xs:px-16 xs:py-2 rounded-lg">
                        Ver Carrito
                    </button>

                </div>
            </div>
        </div>
    )
}
