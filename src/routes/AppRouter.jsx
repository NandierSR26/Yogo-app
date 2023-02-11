import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BussinessDirectory } from '../pages/BussinessDirectory'
import { BussinessPage } from '../pages/BussinessPage'
import { ChooseProducts } from '../pages/ChooseProducts'
import { RequestOrder } from '../pages/RequestOrder'

export const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<BussinessDirectory />} />
            <Route path="/:category" element={<BussinessDirectory />} />
            <Route path="/sites/:site" element={<BussinessPage />} />
            <Route path="/:site/menu" element={<ChooseProducts />} />
            <Route path="/cart" element={<RequestOrder />} />
        </Routes>
    )
}
