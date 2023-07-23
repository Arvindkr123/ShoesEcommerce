import React from 'react'

const Input = ({handleChange, value, title, name, color}) => {
    return (
        <>
            <label className="sidebar-label-container">
                <input onChange={handleChange} value={value} type="radio" name={name} />
                <span className='checkMark' style={{backgroundColor:color}}></span>{title}
            </label>
        </>
    )
}

export default Input
