
export const Card = ({ data, icon = false }) => {
    return (
        <div key={data.id} className="flex bg-gray rounded-md overflow-hidden shadow-xl">
            <div className="w-[100px] flex-shrink-0">
                <img src={data.img} alt="bussiness" className="w-[100%] min-h-[100%]" />
            </div>

            <div className="flex flex-1 flex-col justify-between items-start gap-1 p-2">
                <h5 className="text-[1rem] font-bold font-inter">{data.title}</h5>
                <p className="text-[.8rem] text-[#828282] font-inter">{data.description}</p>
            </div>

            <div className="icons flex flex-col h-full justify-between items-center p-2">
                {
                    (icon === 'add-to-cart') && (
                        <div className="bg-blue p-2 rounded-lg cursor-pointer">
                            <i className="fa-sharp fa-solid fa-cart-plus text-white text-[1rem]"></i>
                        </div>
                    )
                }
                {
                    (icon === 'delete-to-cart') && (
                        <div className="bg-red p-2 rounded-lg cursor-pointer">
                            <i className="fa-solid fa-trash-can text-white text-[1rem]"></i>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
