import React from 'react'
import './Price.css'

const Price = () => {
    return (
        <div className='ml'>
            <h2 className="sidebar-title price-title">Price</h2>
            <label className="sidebar-label-container">
                <input type="radio" name="test2" />
                <span className='checkMark'></span>All
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test2" />
                <span className='checkMark'></span>$0-$50
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test2" />
                <span className='checkMark'></span>$50-$100
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test2" />
                <span className='checkMark'></span>$150-$200
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test2" />
                <span className='checkMark'></span>over $500
            </label>
        </div>
    )
}

export default Price
