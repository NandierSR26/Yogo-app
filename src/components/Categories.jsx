import React from 'react'
import { menuItems } from '../constants'

export const Categories = () => {
    return (
        <nav className="w-full py-3 px-3 sm:px-10">
            <ul className="menu__items flex items-center justify-start gap-5 w-full overflow-x-scroll">
                {
                    menuItems.map(({id, text}) => (
                        <li key={id}>
                            <a href="#" className="text-[#A9A9A9] font-medium font-inter">{text}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
