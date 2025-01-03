import React, { useEffect } from 'react'
import CountRestaurant from './CountRestaurant'
import Restaurant from './Restaurant'
import { getRestaurants, sortByReviews, toggleVegOnly } from '../../actions/restaurantAction'
import { useDispatch, useSelector } from 'react-redux' //show the data in console
import Loader from "./Loader"
import Message from './Message'

export default function Home() {
  const dispatch= useDispatch();//use Dispatch hook comming from redux reduct

  const {
    loading: restaurantsLoading,
    error: restaurantsError,
    restaurants,
    showVegOnly, //selecting it , for chosing the option for the restaurants component
  }= useSelector((state)=>state.restaurants);//coming from store
  //useSelector for the working of chosing loading and error of the file,
  //loading ,error, resturants is coming
  //now, by using this we make our data is dynamic to nature

  //useEffect carry, 1.callback function and 2. dependancy array
  useEffect(()=>{
    //dispatch means giving order
    dispatch(getRestaurants());//if we dispatch from their, how redux will know about that, by using HOOKs , we done it
    //HOOKS Selection:-
    //1. useselector- 
    //2. useDispatch- You may use it to dispatch actions as needed
  },[dispatch]); //dispatch in this is a dependancy array


  //handle function outside redux statement
  //written for onclick to effect in the website
  const handleSortByReview = () =>{
    dispatch(sortByReviews());
  };
  //similarily for other function

  const handleSortByRatings =() => {
    dispatch(sortByReviews());
  };

  const handleToggleVegOnly =()=> {
    dispatch(toggleVegOnly());
  };
  


  return ( //in fragmentation , we use the code, for in structure manner , get
    <> 
    <CountRestaurant /> 
    {/* later we will show */}
    {/* We have to do , if and else statement , below is demo of this*/}
    {/* if(restaurantsLoading){
      <Loader/>}
    else if (restaurantsError){
      <Message></Message>
    }
    else{
      whole part will we return
    } */}
    {restaurantsLoading ? (<Loader/>): restaurantsError ? (<Message variant ="danger"> 
      {/* danger variant is crop of message , showing red and danger color of pop, it also have children component as resturantsError */}
      {restaurantsError}</Message>):(
        <>
          <section>
            <div className="sort">

            {/* link to another page for doing rev, veg , rating all thing */}
              <button className="sort_veg p-3" onClick={handleToggleVegOnly}>
                {/* Pure Veg, this is static text, below one using dynamic by using if else statement*/}
                {showVegOnly ? "ShowALL" : "Pure Veg"}
              </button> 

              <button className="sort_rev p-3" onClick={handleSortByReview}>Sort By Review</button> 
              <button className="sort_rate p-3" onClick={handleSortByRatings}>Sort By Rating</button> 
            </div>
            <div className="row mt-4">
              {/* <Restaurant/>
              <Restaurant/>
              <Restaurant/>
              <Restaurant/>
              <Restaurant/>
              <Restaurant/>
              <Restaurant/>
              <Restaurant/>   */}
              {/* This all will we written in 1-2 line, by using map function below*/}
              {restaurants ? (
                restaurants.map ((restaurant)=> 
                  !showVegOnly || (showVegOnly && restaurant.isVeg) ? (
                  //if showVegOnlyis  true , so it is show restaurant veg only
                  <Restaurant key={restaurant._id} restaurant={restaurant}/>
                ): null) //this one function
              ) : (
                <Message variant="info">No Restaurant Found</Message>
              )} {/*is else satement*/}
                 
            </div>
          </section>

        </>

      )} 
    {/*This is nested if else statement
       The see in restaurant Loading so, show Loader part import form loader file , else 
    is their any type of if else regarding error part */}
    {/* <section>
        <div className="sort">
            <button className="sort_veg p-3">Pure Veg</button>
            <button className="sort_rev p-3">Sort By Review</button>
            <button className="sort_rate p-3">Sort By Rating</button> 
        </div>
        <div className="row mt-4">
        <Restaurant/>
        <Restaurant/>
        <Restaurant/>
        <Restaurant/>
        <Restaurant/>
        <Restaurant/>
        <Restaurant/>
        <Restaurant/>

            
        </div>
    </section> */}
    {/* Cut this section and paste to error or loading part, to get website as dynamic website */}
    {/* We are creating restaurant ,new file because of the mesy in component,
     to make separate component , of it*/}
    


    </>
    // <div>
    //   <CountRestaurant/>
    // </div>
  );
}
