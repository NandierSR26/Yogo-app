import React from 'react'
import { CardList } from '../components/CardList'
import { Categories } from '../components/Categories'
import { Header } from '../components/Header'

export const RequestOrder = () => {
    return (
        <div className="flex flex-col justify-start items-start h-[100vh] w-full">
            <Header title="Mesa #1" itemLeft itemRight={'next'} />
            <Categories />
            <main className="flex-1 overflow-scroll">
                <CardList icon={'delete-to-cart'} />
            </main>
            <div className="see__cart px-3 sm:px-10 mb-3 w-full bg-transparent">
                <p className="text-[1.5rem] font-semibold font-inter text-center">
                    Precio Total: <span className="text-red">$96.000</span>
                </p>
                <div className="flex justify-center items-center bottom-0 w-full bg-blue px-3 py-3 rounded-lg cursor-pointer">
                    <p className="price text-[1rem] xs:text-[1.2rem] text-white font-inter font-semibold">
                        Solicitar Pedido
                    </p>
                </div>
            </div>
        </div>
    )
}
