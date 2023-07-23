import React from 'react'
import './Colors.css'
import Input from '../../components/Input'
const Colors = ({ handleChange }) => {
    return (
        <div>
            <h2 className="sidebar-title color-title">Color</h2>
            <Input handleChange={handleChange}  value={'black'} title={'Black'} name={'test1'} color={'black'} />
            <Input handleChange={handleChange} value={'red'} title={'Red'} name={'test1'} color={'red'} />
            <Input handleChange={handleChange} value={'blue'} title={'Blue'} name={'test1'} color={'blue'} />
            <Input handleChange={handleChange} value={'white'} title={'White'} name={'test1'} color={'yellow'} />
            <Input handleChange={handleChange} value={'green'} title={'Green'} name={'test1'} color={'green'} />
        </div>
    )
}

export default Colors
