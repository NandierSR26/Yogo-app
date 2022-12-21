import { bussinesCard } from "../constants"

import { Card } from "./Card"

export const CardList = ({ icon }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1700px] gap-7 px-3 sm:px-10 py-5 my-0 mx-auto">
            {
                bussinesCard.map( card => (
                    <Card key={card.id} data={ card } icon={icon}/>
                ))
            }
        </div>
    )
}
