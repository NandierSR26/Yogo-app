import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Card } from '../components/Card'
import { Header } from '../components/Header'
import { BusinessContext } from '../context/Business/BusinessContext'

export const BussinessPage = () => {

    const { getOneBusiness, businessData, businessProductsList, setBusinessData } = useContext(BusinessContext)
    const { site } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getOneBusiness(site)

        return () => {
            setBusinessData({})
        }
    }, [])

    return (
        <div className="flex flex-col justify-start items-start h-[100vh] w-full">
            <Header itemLeft />

            <main className="flex-1 overflow-scroll w-full">
                <section
                    style={{
                        backgroundImage: `url(${(businessData.banner === 'banner_default.jpg') ? '/img/banner.jpg' : businessData.banner})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className="w-full h-[300px] sm:h-[400px] mb-10"
                />

                <section className="px-3 sm:px-10">
                    <h2 className="text-[1.3rem] sm:text-[2rem] font-semibold font-inter mb-5 border-b-2 border-[gray]">{ businessData.nombre }</h2>

                    <div className="flex justify-between h-max gap-3 mb-10">
                        <div className="w-[160px] xs:w-[180px] sm:w-[250px]">
                            <img
                                src={(businessData.imagen === 'perfil_default.jpg') ? '/img/bussiness.jpg' : businessData.imagen}
                                className="w-full rounded-lg "
                                alt="bissines-image"
                            />
                        </div>

                        <div className="flex flex-col flex-1 justify-between gap-2 sm:px-[5rem]">
                            <button 
                                className="bg-purple rounded-md text-white font-medium font-inter py-[5px] sm:py-[10px]"
                                onClick={() => navigate(`/${businessData.nombre}/menu`)}
                            >
                                Comprar
                            </button>
                            
                            <button 
                                className="bg-red rounded-md text-white font-medium font-inter py-[5px] sm:py-[10px]"
                            >
                                Llamar
                            </button>
                            
                            <button 
                                className="bg-primary rounded-md text-white font-medium font-inter py-[5px] sm:py-[10px]"
                            >
                                WhatsApp
                            </button>
                            
                            <button 
                                className="bg-blue rounded-md text-white font-medium font-inter py-[5px] sm:py-[10px]"
                            >
                                ¿Comollegar?
                            </button>
                            
                        </div>
                    </div>

                </section>

                <section className="description mb-10 px-3 sm:px-10">
                    <h5 className="text-[1rem] sm:text-[1.5rem] font-semibold font-inter mb-2">Descripcion</h5>
                    <p className="text-[.8rem] sm:text-[1.2rem] font-inter">{businessData.presentacion}</p>
                </section>

                {
                    (businessData.gallery) && (
                        <section className="gallery mb-10 px-3 sm:px-10">
                            <h5 className="text-[1rem] sm:text-[1.5rem] font-semibold font-inter mb-2">Galeria</h5>
                            <div className="gallery__items flex items-center justify-start gap-5 overflow-x-scroll">
                                {
                                    businessData.gallery && (
                                        Object.values(businessData.gallery).map((url) => (
                                            <div
                                                key={url}
                                                className="w-[100px] sm:w-[200px] flex-shrink-0"
                                            >
                                                <img src={url} alt="img" className="w-full rounded-md" />
                                            </div>
                                        ))
                                    )
                                }
                            </div>
                        </section>
                    )
                }

                {
                    (businessProductsList.length > 0) && (
                        <section className="products mb-10 px-3 sm:px-10">
                            <h5 className="text-[1rem] sm:text-[1.5rem] font-semibold font-inter mb-2">Productos</h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1700px] gap-7">
                                {
                                    businessProductsList.map(product => (
                                        <Card key={product.id} data={product} pointerEvents={false} />
                                    ))
                                }
                            </div>
                        </section>
                    )
                }
            </main>


        </div>
    )
}