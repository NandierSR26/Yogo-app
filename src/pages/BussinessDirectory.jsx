import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardList } from '../components/CardList'
import { Categories } from '../components/Categories'
import { Header } from '../components/Header'
import { BusinessContext } from '../context/Business/BusinessContext'

export const BussinessDirectory = () => {

    const [inputValue, setInputValue] = useState({
        sitename: ''
    })
    const { globalCategories, business, businessByCategory, getBussinessByCategory, searchResult, searchSites } = useContext(BusinessContext)
    const { category } = useParams()

    const handleInputChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }


    useEffect(() => {
        searchSites(inputValue.sitename, category)
    }, [inputValue])


    useEffect(() => {
        if (category) {
            getBussinessByCategory(category)
        }
    }, [category])

    return (
        <div className="flex flex-col justify-start items-start h-[100vh] w-full">
            <Header />
            <Categories items={globalCategories} />

            <div className="flex flex-wrap justify-center items-center w-full py-3 px-3 sm:px-10 gap-2 xs:gap-5">
                <input
                    type="text"
                    name="sitename"
                    placeholder="ingresa un sitio"
                    className="font-inter w-full xs:w-[200px] sm:w-[400px] md:w-[600px] text-[#A9A9A9] px-3 py-2 border-solid border-2 border-[#A9A9A9] rounded-md bg-[#F4F4F4] text-sm"
                    onChange={handleInputChange}
                />

                <div className="flex items-center justify-center gap-2 bg-primary py-2 px-3 rounded-md cursor-pointer w-full xs:w-auto">
                    <i className="fa-solid fa-magnifying-glass text-white text-sm"></i>
                    <p className="text-sm text-white font-inter">buscar</p>
                </div>
            </div>

            <main className="flex-1">
                {
                    inputValue.sitename.length > 0
                        ? <CardList cardsData={searchResult} />
                        : <CardList cardsData={category ? businessByCategory : business} />
                }
            </main>
        </div>
    )
}
