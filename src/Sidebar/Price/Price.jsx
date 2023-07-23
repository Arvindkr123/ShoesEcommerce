import React from 'react'
import './Price.css'
import Input from '../../components/Input'

const Price = ({ handleChange, }) => {
    return (
        <div className='ml'>
            <h2 className="sidebar-title price-title">Price</h2>
            <Input handleChange={handleChange} value={50} title={'0$-$50'} name='test2' />
            <Input handleChange={handleChange} value={100} title={'100$-$150'} name='test2' />
            <Input handleChange={handleChange} value={150} title={'150$-$200'} name='test2' />
            <Input handleChange={handleChange} value={200} title={'200$-$250'} name='test2' />
            <Input handleChange={handleChange} value={250} title={'over 300$'} name='test2' />
        </div>
    )
}

export default Price;
