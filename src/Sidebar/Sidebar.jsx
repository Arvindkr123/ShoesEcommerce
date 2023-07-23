import React from 'react'
import './Sidebar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
const Sidebar = () => {
    return (
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1 className='sidebar-title'><AiOutlineShoppingCart /></h1>
                </div>
                <Category />
                <Price />
                <Colors />
            </section>
        </>
    )
}

export default Sidebar
