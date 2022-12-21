import React from 'react'
import { CardList } from '../components/CardList'
import { Categories } from '../components/Categories'
import { Header } from '../components/Header'

export const BussinessDirectory = () => {
    return (
        <>
            <Header itemRight={'next'} itemLeft />
            <Categories />
            <CardList />
        </>
    )
}
