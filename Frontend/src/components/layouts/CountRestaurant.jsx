import React, { useEffect } from 'react'
import { getRestaurants } from '../../actions/restaurantAction';
import { useDispatch, useSelector } from 'react-redux';

export default function CountRestaurant() {
  const dispatch = useDispatch();
  const {loading,error,count,showVegOnly,pureVegRestaurantsCount}= useSelector((state)=>state.restaurants);
  
  //for dynamic , we have to dispatch and then add it by use effect
  useEffect(()=>{
    dispatch(getRestaurants());
  },[dispatch]);
  return (
    <div>
      {loading ? (
        <p>Loading Restaurant count...</p>
      ): error ? (
        <p>Error: {error}</p>
      ): (
        <p className="NumOfRestro">
          {/* making count dynamic by clicking to pure veg or show all , it changes their number by using if else statement */}
          {showVegOnly ? pureVegRestaurantsCount : count} {" "}
          {/*{count}*/} <span className="Restro">{ // we have also write code for restaurant is singular or pular like restaurant or restaurants
              showVegOnly ? pureVegRestaurantsCount === 1 ? "Restaurant" : "Restaurants" 
              : count ===1 ? "Restaurant" : "Restaurants"  
              //displaying all in dyanmic with grammer too
          } </span> 
        </p>
      )}
      
      <hr />
    </div>
  );
}
