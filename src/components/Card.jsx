import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/cart/CartContext"
import { UiContext } from "../context/ui/UiContext"

export const Card = ({ data, icon = false, pointerEvents = true }) => {

    const { setProductData, deleteOfCart } = useContext(CartContext)
    const { openAndCloseModal } = useContext(UiContext)
    const navigate = useNavigate()

    const navigateTo = () => {
        navigate(`/sites/${data.user}`)
    }

    const openModal = () => {
        openAndCloseModal()
        setProductData(data)
    }

    return (
        <div
            className={`flex h-[120px] sm:h-[150px] bg-[#f4f4f4] rounded-md overflow-hidden shadow-md ${pointerEvents ? 'cursor-pointer hover:scale-[1.05] transition-transform' : 'pointer-events-none'}`}
            onClick={pointerEvents ? navigateTo : null}
        >
            <div className="w-[100px] sm:w-[130px] flex-shrink-0">
                {
                    (data.imagen === 'perfil_default.jpg' || data.imagen === 'null.png')
                        ? (<img src="/img/no-image.jpeg" alt="bussiness" className="w-[100%] min-h-[100%]" />)
                        : (<img src={data.imagen} alt="bussiness" className="w-[100%] min-h-[100%]" />)
                }
            </div>

            <div className="flex flex-1 flex-col justify-start items-start gap-1 p-2">
                {
                    data.product
                        ? (
                            <>
                                <h5 className="text-[1rem] font-bold font-inter">{data.amount} - {data.product.nombre}</h5>
                                <p className="text-[.8rem] text-[#828282] font-inter">{data.product.presentacion || data.product.descripcion}</p>
                                <p className="text-[.8rem] text-[#828282] font-inter">{data.product.precio && data.product.precio}</p>
                            </>
                        ) : (
                            <>
                                <h5 className="text-[1rem] font-bold font-inter">{data.nombre}</h5>
                                <p className="text-[.8rem] text-[#828282] font-inter">{data.presentacion || data.descripcion}</p>
                                <p className="text-[.8rem] text-[#828282] font-inter">{data.precio && data.precio}</p>
                            </>
                        )
                }
            </div>

            <div className="icons flex flex-col h-full justify-between items-center p-2">
                {
                    (icon === 'add-to-cart') && (
                        <div
                            className="bg-blue p-2 rounded-lg cursor-pointer pointer-events-auto z-10"
                            onClick={() => openModal()}
                        >
                            <i className="fa-sharp fa-solid fa-cart-plus text-white text-[1rem]"></i>
                        </div>
                    )
                }
                {
                    (icon === 'delete-to-cart') && (
                        <div 
                            className="bg-red p-2 rounded-lg cursor-pointer pointer-events-auto z-10"
                            onClick={() => deleteOfCart(data.id)}
                        >
                            <i className="fa-solid fa-trash-can text-white text-[1rem]"></i>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
