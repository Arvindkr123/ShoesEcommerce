import React from 'react'
import './Category.css'


const Category = () => {
    return (
        <div>
            <h2 className="sidebar-title">Category</h2>
            <div className='sidebar-items'>
                <label className="sidebar-label-container">
                    <input type="radio" name="test" />
                    <span className='checkMark'></span>All
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" name="test" />
                    <span className='checkMark'></span>Sneakers
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" name="test" />
                    <span className='checkMark'></span>Sandals
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" name="test" />
                    <span className='checkMark'></span>Flats
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" name="test" />
                    <span className='checkMark'></span>Heels
                </label>
            </div>
        </div>
    )
}

export default Category
