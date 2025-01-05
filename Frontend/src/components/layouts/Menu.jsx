import React from 'react'
import FoodItem from './FoodItem'

export default function Menu() {
  return (
    <div>

        <div>
            <h2>Chaats</h2>
            <hr />
            <div className='row'>
                <FoodItem/>             
                <FoodItem/>             
                <FoodItem/>             
            </div>
        </div>

        <div>
            <h2>Main Course</h2>
            <hr />
            <div className='row'>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
            </div>
        </div>
      
    </div>
  )
}
