import { sortByRatings, sortByReviews } from "../actions/restaurantAction";
import { All_RESTAURANTS_FAIL, All_RESTAURANTS_REQUEST, All_RESTAURANTS_SUCCESS, SORT_BY_RATINGS, SORT_BY_REVIEWS, TOGGLE_VEG_ONLY } from "../constants/restaurantConstant";

const initialState={
    restaurants: [], //when we get some data, then it increase from empty part
    //this state, will store in STORE for making it simple, in dictionary format
};



export const restaurantReducer =(state=initialState,action)=>{
    switch (action.type) { //in action folder of restaurant , we contain type description to dispatch
        case All_RESTAURANTS_REQUEST:
            return{
                ...state, //spread the state,i.e. empty state, to fill some value
                loading:true,//loading start, we are not fetch the data, we just loading request from other
                error: null,
            };
            case All_RESTAURANTS_SUCCESS:
                return {
                    ...state,//update state of spread
                    loading: false,
                    count: action.payload.count, //payload having data to the action to show
                    //action is object, inside payload is key, inside their count
                    restaurants: action.payload.restaurants, //one error of action.payload and nothing their
                    
                }//payload means sending the data
                //these line data will store in const initial state of step 3 , 
            // break;

            case All_RESTAURANTS_FAIL:
                return{
                    ...state, //initial state
                    loading:false,//because we want to show the error
                    error: action.payload,
                };
            
            case SORT_BY_RATINGS:
                return{
                    ...state, 
                    restaurants: [...state.restaurants].sort( //taking all spread in array
                        (a,b) => b.ratings - a.ratings), //then applying sorting method , for calculation   
                        //a and b is for comparing operator 
                        // if a is smaller than b rating, then b is displaying         
                };

            //simarlily for the reviews
            case SORT_BY_REVIEWS:
                return{
                    ...state,
                    restaurants: [...state.restaurants].sort(
                        (a,b)=> b.numOfReviews - a.numOfReviews),
                };

            //filtering , muted the data, fetch the data
            //javascript filtering is working

            case TOGGLE_VEG_ONLY:
                return{
                    ...state,
                    //show veg only give
                    showVegOnly: !state.showVegOnly, //for first time , it was false, then after click , then turn to true, in that, option of pure restuarnt gone
                    //and give all restaurant option show that, it can balanced it
                    pureVegRestaurantsCount: calculatePureVegCount( //create a middleware fuction for counting how many are pure veg restaurant
                        state.restaurants,
                        !state.showVegOnly
                    ),//making button for the true or false part
                };
    
        default:
            return state;//no command run , it will return state, that are following
            // break;
    }
   
};

//we have to write middle ware, that will go to anotherpage, and filter the value
const calculatePureVegCount = (restaurants,showVegOnly)=>{
    if (!showVegOnly){
        return restaurants.length;
    }
    else{
        return restaurants.filter((restaurant) => restaurant.isVeg).length;
    }
};