import React from 'react';
import { FaSearch } from "react-icons/fa";

export default function Search() { //search is a input tag
  return (
    <form>
        <div className="input-group">
            {/* input:text.form-control#seach_field */}
            <input 
            type="text" 
            placeholder="Search Your Favorite Restaurant" // seaching list name
            id="search_field" 
            className="form-control" />
            <div className="input-group-append"> 
                {/* React Icon */}
                <button id="search_btn" className="btn">
                <FaSearch className='fa fa-search' /> {/* <FaSearch />, this is external source
                so we need make package to install it , in pakage.json it is already install just to import it */}
                </button>
            </div>
            
        </div>
    </form>
  )
}
