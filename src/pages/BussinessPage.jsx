import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Card } from '../components/Card'
import { Header } from '../components/Header'
import { ImageModal } from '../components/ImageModal'
import { BusinessContext } from '../context/Business/BusinessContext'
import { UiContext } from '../context/ui/UiContext'

export const BussinessPage = () => {

    const { getOneBusiness, businessData, businessProductsList, setBusinessData } = useContext(BusinessContext)
    const { openAndCloseModal, setImageModal } = useContext(UiContext)
    const { site } = useParams();
    const navigate = useNavigate();

    const openImage = (image) => {
        openAndCloseModal()
        setImageModal(image)
    }
    
    useEffect(() => {
        getOneBusiness(site)
        return () => {
            setBusinessData({})
        }
    }, [site])

    return (
        <div className="relative flex flex-col justify-start items-start h-[100vh] w-full">
            <Header itemLeft />

            <main className="flex-1 w-full">
                <section
                    style={{
                        backgroundImage: `url(${(businessData.banner === 'banner_default.jpg') 
                            ? '/img/banner-placeholder.jpeg'
                            : businessData.banner
                        })`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center bottom',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className="w-full h-[300px] sm:h-[400px] mb-10 cursor-pointer"
                    onClick={() => openImage(
                        businessData.banner === 'banner_default.jpg' ? '/img/banner-placeholder.jpeg' : businessData.banner
                    )}
                />

                <section className="px-3 sm:px-10">
                    <h2 className="text-[1.3rem] sm:text-[2rem] font-semibold font-inter mb-5 border-b-2 border-[gray]">{businessData.nombre}</h2>

                    <div className="flex justify-between h-max gap-3 mb-10">
                        <div className="w-[160px] xs:w-[180px] sm:w-[250px]">
                            <img
                                src={(businessData.imagen === 'perfil_default.jpg') ? '/img/no-image.jpg' : businessData.imagen}
                                className="w-full rounded-lg cursor-pointer"
                                alt="bissines-image"
                                onClick={() => openImage(
                                    businessData.imagen === 'perfil_default.jpg' ? '/img/no-image.jpg' : businessData.imagen
                                )}
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
                                ¿Como llegar?
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
                        <section className="gallery mb-10 px-3 sm:px-10 relative ">
                            <h5 className="text-[1rem] sm:text-[1.5rem] font-semibold font-inter mb-2">Galeria</h5>
                            <div className="gallery__items overflow-x-hidden">
                                {
                                    businessData.gallery && (
                                        Object.values(businessData.gallery).map((url) => (
                                            <div
                                                key={url}
                                                onClick={() => openImage(url)}
                                                className="cursor-pointer rounded-md overflow-hidden"
                                            >
                                                <img src={url} alt="img" className="w-full rounded-md h-full hover:scale-110 transition-all" />
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1700px] gap-5">
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

            <ImageModal />
        </div>
    )
}