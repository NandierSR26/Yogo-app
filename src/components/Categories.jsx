import React from 'react'
import { Link } from 'react-router-dom'

export const Categories = ({ items }) => {
    return (
        <nav className="w-full py-3 px-3 sm:px-10">
            <ul className="menu__items flex items-center justify-start gap-5 w-full overflow-x-scroll">
                {
                    items.map((item) => (
                        <li key={item} className="flex-shrink-0">
                            <Link to={`/${item}`} className="text-[#A9A9A9] font-medium font-inter">{item}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
