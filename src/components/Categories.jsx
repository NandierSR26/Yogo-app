import React from 'react'
import { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Categories = ({ items }) => {

    const navbar = useRef()

    return (
        <nav className="w-full flex gap-5 py-3 px-3 sm:px-10">
            <div 
                className="cursor-pointer"
                onClick={ () => {navbar.current.scrollLeft -= navbar.current.clientWidth - 25} }
            >
                <i className="fa-solid fa-angle-left text-primary text-2xl"></i>
            </div>
            <ul 
                className="menu__items flex items-center justify-start gap-5 w-full overflow-x-hidden scroll-smooth"
                ref={ navbar }
            >
                {
                    items.map((item) => (
                        <li key={item} className="flex-shrink-0">
                            <NavLink to={`/${item}`} className={({isActive}) => isActive ? 'active__link font-medium font-inter' : 'text-[#A9A9A9] font-medium font-inter' }>{item}</NavLink>
                        </li>
                    ))
                }
            </ul>
            <div 
                className="cursor-pointer"
                onClick={ () => { navbar.current.scrollLeft += navbar.current.clientWidth - 25 } }
            >
                <i className="fa-solid fa-angle-right text-primary text-2xl"></i>
            </div>
        </nav>
    )
}
