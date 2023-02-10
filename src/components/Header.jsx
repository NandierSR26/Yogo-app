import { useNavigate } from "react-router-dom"


export const Header = ({ itemLeft, title = 'Yogo App', subtitle = "¡Yogo lo muestra, tú lo vives!", itemRight }) => {

    const navigate = useNavigate()

    return (
        <header className="flex justify-between items-center bg-primary py-3 px-3 sm:px-10 w-full">

            {
                itemLeft && (
                    <div
                        className="cursor-pointer"
                        onClick={() => navigate(-1)}
                    >
                        <i className="fa-solid fa-arrow-left-long text-white text-[1rem] sm:text-[1.5rem]"></i>
                    </div>
                )
            }

            <div className="flex flex-1 flex-col items-center justify-center">
                <h1 className="text-white font-inter text-[1.2rem] sm:text-[1.5rem] font-bold">{title}</h1>
                <p className="hidden sm:block text-white text-[1rem] font-medium">{subtitle}</p>
            </div>

            <div>
                {(itemRight === 'QR') && <i className="fa-solid fa-qrcode text-white text-[1rem] sm:text-[1.5rem]"></i>}
                {(itemRight === 'next') && <i className="fa-solid fa-arrow-right-from-bracket text-white text-[1rem] sm:text-[1.5rem]"></i>}
            </div>
        </header>
    )
}
