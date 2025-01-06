import React from 'react'

export default function Restaurant({ restaurant }) { //restaurant as a prop for getting answer
  return (
    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
        <div className="card p-3 rounded">
            {/* <img src="https://b.zmtcdn.com/data/pictures/7/18738947/bedddb08e3eafa541fdec9db26613993.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*" alt="Dominos" /> */}
            {/* above one is static image */}
            {/* below one is dynamic image  */}
            <img 
              src={restaurant.images[0].url}
              alt={restaurant.name}
              className="card-img-top mx-auto" 
            />
            {/* for haeading and address */}
            <div className="card-body d-flex flex-column">
                {/* <h5 className="card-title">Dominos Pizza</h5> This is Static */}
                <h5 className="card-title">{restaurant.name}</h5> {/* This is Dynamic*/ }
                {/* <p className="rest_address">123, Nana-Street,Guna-473001, Madhya Pradesh</p> This is static */}
                <p className="rest_address">{restaurant.address}</p>
                
                {/* for reviews and rating */}
                <div className='ratings mt-auto'>
                  <div className="rating-outer">
                    {/* <div className="rating-inner"></div> This is for static  */}
                    <div 
                      className="rating-inner"
                      style={{width:`${(restaurant.ratings / 5)*100}%`}}>
                    </div>
                  </div>
                  {/* <span id="no_of_reviews">(140 reviews)</span> This is for static ,below is dynamic */}
                  <span id="no_of_reviews">({restaurant.numOfReviews} reviews)</span>
                </div>
            </div>
        </div>  
    </div>
  )
}
