import React from 'react'
import Search from './Search'

export default function Header() {
  return (
    <nav className="navbar row sticky-top">
        {/* logo */}
        <div className="col-12 col-md-3"> 
            {/* col-12 it is a bootstrap */}
            <img src="/images/logo.webp" alt="logo" className="logo" />

        </div>
        {/* Search bar and Search Icon , creating other file 
        for not complicating the code for other */}
        <div className="col-12 col-md-6 mt-2 mt-md-6">
            <Search/>
        </div>
        <div className="col-12 col-md-3 mt-4 mt-md-0">
            <span className="ml-3" id="cart">
                Cart
            </span>
            <span className="ml-1" id='cart_count'>
                0
            </span>
            {10>5 ? (
                    <>
                    <div className="ml-4 dropdown d-inline">
                        <figure className="avatar avatar-nav">
                            {/* <img  alt="avatar" className="rounded-circle" /> */}
                            <img src="\images\images.png" alt="avatar" className="rounded-circle" />
                        </figure>
                        <span style={{color: "white", fontWeight: "bolder"}}>
                            Helper Team
                        </span>
                    </div>
                    </>
                ) :(
                    <div className="btn ml-4" id="login_btn">
                        Login
                    </div>
                )
            }


        </div>
    </nav>
  );
}
