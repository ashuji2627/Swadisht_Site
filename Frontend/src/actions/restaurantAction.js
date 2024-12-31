import axios from "axios";
import { All_RESTAURANTS_FAIL, All_RESTAURANTS_REQUEST, All_RESTAURANTS_SUCCESS, CLEAR_ERROR, SORT_BY_RATINGS, SORT_BY_REVIEWS, TOGGLE_VEG_ONLY } from "../constants/restaurantConstant"

export const getRestaurants =()=>{ //command to take , export it
    //we need async , awaitfunction, to take data from outside source
    return async(dispatch)=>{ 
        //makeing async function , which have parameters dispatch and giving order
        //verbal order we are write
        
        try{
            dispatch({type: All_RESTAURANTS_REQUEST});
        //now fetch the data
        let link=`/api/v1/eats/stores`;//this link just holding our data only
        //Postman are the testing API or URL,
        //logic to connect and store data
        const {data}= await axios.get(link);
        console.log(data);
        
        const{ restaurants,count }=data; //till now , only the loading state , will happened 
        dispatch({
            type: All_RESTAURANTS_SUCCESS,
            payload:{restaurants,count},
            //payload means , that data you gonna send to the store
        });


        }catch(err){ //anything happen, in above , directly goes down in catch block
            // console.log(err);
            //above is normal, now using constant function which we create now
            //distpatching the error also
            dispatch({
                type: All_RESTAURANTS_FAIL,
                payload: err.response.data.message,
            });   //dispatch we are writting while dispatching the data
        }
    };
};

//command for sort by rating , sort by reviews
export const sortByRatings =() => {
    return {
        type: SORT_BY_RATINGS,//only returning the type of data
    };//here we doesn't want interaction with data
};

//Similary for others
export const sortByReviews =() => {
    return {
        type: SORT_BY_REVIEWS,//only returning the type of data
    };//here we doesn't want interaction with data
};

export const toggleVegOnly =() => {
    return {
        type: TOGGLE_VEG_ONLY,//only returning the type of data
    };//here we doesn't want interaction with data
};

export const clearErrors =() => {
    return {
        type: CLEAR_ERROR,//only returning the type of data
    };//here we doesn't want interaction with data
};


