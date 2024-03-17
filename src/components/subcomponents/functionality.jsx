// import { useState, useEffect } from "react";

export default function Functionality({handleChangeCategory, handleChangeSearchKey}) {
    
    const categoryChange = (e) => {
        handleChangeCategory(e.target.value);
    }
    
    const searchChange = (e) => {
        handleChangeSearchKey(e.target.value);
    }

    return (
        <div className="func">
          <div className="hamburger">
            <a href={void(0)} className="icon">
                <i className="fa fa-bars"></i>
            </a>
          </div>

          <select name="categories" onChange={categoryChange}>
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's clothing">Men&apos;s Clothing</option>
              <option value="women's clothing">Women&apos;s Clothing</option>
          </select>
          
          <div className="search">
            <input placeholder='Search this blog' type='text' name="searchInput" onChange={searchChange}/>
            <div>
              <i className="fa fa-search"></i>
            </div>
          </div>

          <select name='language' className="language">
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="japanese">Japanese</option>
          </select>

          <div className="cart_and_profile">
            <i className="fa fa-user"></i>
            CART
          </div>

          <div className="cart_and_profile">
            <i className="fa fa-shopping-cart"></i>
            ME
          </div>
        </div>
    );
}