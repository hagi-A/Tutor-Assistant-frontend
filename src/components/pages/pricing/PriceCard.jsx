import React from 'react'
import { price } from '../../../Dummydata'

const PriceCard = () => {
  return (
    <>
      {price.map((val) =>(
        <div className='items rounded border border-violet-300 hover:bg-violet-400 hover:transform ' id="pricing">
            <h4>{val.name}</h4>
            <h1>
                <span>$</span>
                {val.price}
            </h1>
            <p>{val.desc}</p>
            <button className="bg-blue-gray-300 shadow border border-violet-300 hover:bg-violet-300 hover:text-white">GET STARTED</button>
        </div>
      ))}   
    </>
  )
}

export default PriceCard