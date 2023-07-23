import React, { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended.jsx'
import Sidebar from './Sidebar/Sidebar'
import products from './db/data'
import Product from './Products/Product'

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    // ----------------------input filter--------------------------
    const [query, setQuery] = useState('');
    const handleInputChange = e => {
        setQuery(e.target.value)
    }
    // filter the data based on the title 
    const filteredItems = products.filter((product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1))

    // -------------------Radio filter---------------------------
    const handleChange = e => {
        setSelectedCategory(e.target.value);
    }

    // -------------------Buttons filter---------------------------
    const handleClick = e => {
        setSelectedCategory(e.target.value)
    }

    const filteredData = (products, query, selected) => {
        let filteredProducts = products;

        // filtering Input items 
        if (query) {
            filteredProducts = filteredItems;
        }

        // selected filter
        if (selected) {
            filteredProducts = filteredProducts.filter(({ title, newPrice, company, category, color }) => {
                category === selected || color === selected || company === selected || title === selected || newPrice === selected
            })
        }

        return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => {
            <Product
                key={Math.random()}
                img={img}
                title={title}
                start={star}
                prevPrice={prevPrice}
                newPrice={newPrice}
                reviews={reviews}
            />
        })
    }

    const results = filteredData(products, selectedCategory, query)

    return (
        <>
            <Sidebar handleChange={handleChange} />
            <Nav />
            <Recommended />
            <Products />
        </>
    )
}

export default App
