import React from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended.jsx'

const App = () => {
    return (
        <>
            <Nav />
            <Recommended/>
            <Products />
        </>
    )
}

export default App
