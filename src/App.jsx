import React from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended.jsx'
import Sidebar from './Sidebar/Sidebar'

const App = () => {
    return (
        <>
            <Sidebar/>
            <Nav />
            <Recommended/>
            <Products />
        </>
    )
}

export default App
