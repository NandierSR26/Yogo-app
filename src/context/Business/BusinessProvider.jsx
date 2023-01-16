import React, { useEffect, useState } from 'react'
import { clienteAxios } from '../../config/axios'
import { BusinessContext } from './BusinessContext'

export const BusinessProvider = ({ children }) => {

    const [business, setBusiness] = useState([])
    const [businessByCategory, setBusinessByCategory] = useState([])
    const [globalCategories, setGlobalCategories] = useState([])
    const [businessData, setBusinessData] = useState({})
    const [businessProductsList, setBusinessProductsList] = useState([])
    const [businessCategories, setBusinessCategories] = useState([])

    const getBusiness = async () => {
        try {
            const { data } = await clienteAxios.get('/CITYS/Sincelejo/MARKETS.json?')
            setBusiness(Object.values(data))
        } catch (error) {
            console.log(error);
        }
    }

    const getBussinessByCategory = async (category) => {
        try {
            const { data } = await clienteAxios(`/CITYS/Sincelejo/MARKETS.json?orderBy="categoria_global"&equalTo="${category}"`)
            setBusinessByCategory(Object.values(data));
        } catch (error) {
            console.log(error);
        }
    }

    const getOneBusiness = async (business) => {
        try {
            const { data: dataBusiness } = await clienteAxios(`/CITYS/Sincelejo/MARKETS.json?orderBy="nombre"&equalTo="${business}"`)
            const [businessInfo] = Object.values(dataBusiness)
            setBusinessData(businessInfo)

            const { data: businessProducts } = await clienteAxios.get(`/CITYS/Sincelejo/PRODUCTS.json?orderBy="id_market"&equalTo="${businessInfo.id}"`)
            setBusinessProductsList(Object.values(businessProducts))
        } catch (error) {
            console.log(error);
        }
    }

    const getGlobalCategories = async () => {
        try {
            const { data } = await clienteAxios.get('/CITYS/Sincelejo/CATEGORIES.json')
            setGlobalCategories(Object.keys(data))
        } catch (error) {
            console.log(error);
        }
    }

    const getBusinessCategories = async (site) => {
        try {
            // get business categories
            const { data: dataBusiness } = await clienteAxios.get(`/CITYS/Sincelejo/MARKETS.json?orderBy="nombre"&equalTo="${site}"`)
            const { data } = await clienteAxios.get(`/CITYS/Sincelejo/MARKETS/${Object.keys(dataBusiness)}/categories.json`)
            setBusinessCategories(Object.keys(data))

            // get business products
            const { data: products } = await clienteAxios.get(`/CITYS/Sincelejo/PRODUCTS.json?orderBy="id_market"&equalTo="${Object.keys(dataBusiness)}"`)
            setBusinessProductsList(Object.values(products))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBusiness()
        getGlobalCategories()
    }, [])

    return (
        <BusinessContext.Provider value={{
            business,
            getBusiness,
            businessByCategory,
            getBussinessByCategory,
            globalCategories,
            businessData,
            setBusinessData,
            businessProductsList,
            getOneBusiness,
            businessCategories,
            getBusinessCategories
        }}>
            {children}
        </BusinessContext.Provider>
    )
}
