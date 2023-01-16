import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CardList } from '../components/CardList'
import { Categories } from '../components/Categories'
import { Header } from '../components/Header'
import { BusinessContext } from '../context/Business/BusinessContext'

export const BussinessDirectory = () => {

    const { globalCategories, business, businessByCategory, getBussinessByCategory, getBusiness } = useContext(BusinessContext)
    const { category } = useParams()

    if(category) {
        getBussinessByCategory(category)
    } else {
        getBusiness()
    }

    return (
        <div className="flex flex-col justify-start items-start h-[100vh] w-full">
            <Header itemRight={'QR'} />
            <Categories items={globalCategories} />
            <main className="flex-1 overflow-scroll">
                <CardList cardsData={ category ? businessByCategory : business } />
            </main>
        </div>
    )
}
