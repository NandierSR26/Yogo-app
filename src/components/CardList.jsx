import { Card } from "./Card"

export const CardList = ({ icon, cardsData, pointerEvents = true, oneColumn = false }) => {

    return (
        <div className={`grid ${ oneColumn ? 'grid-cols-1' : 'grid-cols-1 ss:grid-cols-2 lg:grid-cols-3' } justify-center max-w-[1700px] gap-7 px-3 sm:px-10 py-5 my-0 mx-auto`}>
            {
                cardsData.map(card => (
                    <Card key={card.id} data={card} icon={icon} pointerEvents={pointerEvents} />
                ))
            }
        </div>
    )
}
