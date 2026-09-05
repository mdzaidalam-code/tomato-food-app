import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display'>
      <h2>
        Top food option for you.
      </h2>

      <div className="food-display-list">
        {food_list.map((item,id)=>{
          return(
            <FoodItem key={id} name={item.name} id={item._id} image={item.image} price={item.price} description={item.description} />
          )
        })}
      </div>
    </div>
  )
}

export default FoodDisplay