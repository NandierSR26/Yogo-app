import React from 'react'
import { Card } from '../components/Card'
import { CardList } from '../components/CardList'
import { Header } from '../components/Header'
import { bussinesCard, images } from '../constants'

export const BussinessPage = () => {
    return (
        <>
            <Header itemLeft />

            <section
                style={{
                    backgroundImage: `url('/img/banner.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                className="w-full h-[300px] mb-10"
            />

            <main className="px-3 sm:px-10">
                <h2 className="text-[1.3rem] sm:text-[2rem] font-semibold font-inter mb-2">Llanera la 31</h2>

                <section className="flex justify-between h-max gap-3 mb-10">
                    <div className="w-[150px] sm:w-[200px]">
                        <img
                            src="/img/bussiness.jpg"
                            className="w-full rounded-lg "
                            alt="bissines-image"
                        />

                    </div>

                    <div className="flex flex-col flex-1 justify-between gap-2">
                        <button className="bg-purple rounded-md text-white font-medium font-inter py-[5px]">Comprar</button>
                        <button className="bg-purple rounded-md text-white font-medium font-inter py-[5px]">Llamar</button>
                        <button className="bg-purple rounded-md text-white font-medium font-inter py-[5px]">WhatsApp</button>
                        <button className="bg-purple rounded-md text-white font-medium font-inter py-[5px]">¿Como llegar?</button>
                    </div>
                </section>

                <section className="description mb-10">
                    <h5 className="text-[1rem] sm:text-[1.5rem] font-semibold font-inter mb-2">Descripcion</h5>
                    <p className="text-[.8rem] sm:text-[1.2rem] font-inter">Seguimos con la tradición🥩🐮  |  Pide tu domicilio al @team31express  |  Calle 31 # de 14 -219 diagonal al pozo de majagual</p>
                </section>

                <section className="gallery mb-10">
                    <h5 className="text-[1rem] sm:text-[1.5rem] font-semibold font-inter mb-2">Galeria</h5>
                    <div className="gallery__items flex items-center justify-start gap-5 overflow-x-scroll">
                        {
                            images.map(({ id, img }) => (
                                <div 
                                    key={id}
                                    className="w-[100px] sm:w-[200px] flex-shrink-0"
                                >
                                    <img src={img} alt="img" className="w-full rounded-md" />
                                </div>
                            ))
                        }
                    </div>
                </section>

                <section className="products mb-10">
                    <h5 className="text-[1rem] sm:text-[1.5rem] font-semibold font-inter mb-2">Productos</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1700px] gap-7">
                        {
                            bussinesCard.map( card => (
                                <Card key={card.id} data={card} />
                            ))
                        }
                    </div>
                </section>

            </main>


        </>
    )
}