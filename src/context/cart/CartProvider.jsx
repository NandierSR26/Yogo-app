import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { CartContext } from './CartContext'


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState(null);
    const [cartSpecs, setCartSpecs] = useState({
        price: 0,
        amount: 0,
    })

    const setProductData = (product) => {
        setProduct(product)
    }

    const addToCart = (product) => {
        cart.length === 0 ? setCart([product]) : setCart([...cart, product]);
        const productsInCart = JSON.parse(localStorage.getItem('cart')) || []
        const productToCart = JSON.stringify([...productsInCart, product])
        localStorage.setItem('cart', productToCart)
        toast.success('Producto agregado al carrito')
    }

    const calcCartPrice = () => {
        let cartPrice = 0;
        let productsAmount = 0;

        cart.forEach(({ totalPrice, amount }) => {
            cartPrice += totalPrice
            productsAmount += amount

            setCartSpecs({ price: cartPrice, amount: productsAmount })
        })
    }

    const deleteOfCart = ( id ) => {
        const products = cart.filter( product => product.id !== id )
        setCart(products)
        localStorage.setItem('cart', JSON.stringify(products))

        if(cart.length <= 1) {
            setCartSpecs({price: 0, amount: 0})
        }
    }

    useEffect(() => {
        calcCartPrice()
    }, [cart])

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('cart'))) {
            setCart(JSON.parse(localStorage.getItem('cart')))
        }
    }, [])

    return (
        <CartContext.Provider value={{
            cart,
            setProductData,
            product,
            addToCart,
            cartSpecs,
            deleteOfCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
