import { useState } from "react";

export default function Toggler() {

    const taglines = ["Elevate Your Experience: Endless Choices, Seamless Checkout!", "Your One-Stop Shop for Everything: Convenience At Your Doorstep!", "From Wishlist to Cart: Make Every Click Count with Us!", "Discover More, Spend Less: Unbeatable Deals Await!"];

    const [taglineIndex, setTaglineIndex] = useState(0);

    const slideBack = () => {
        taglineIndex==0 ? setTaglineIndex(3) : setTaglineIndex(taglineIndex-1);
    }
    
    const slideForward = () => {
        taglineIndex==3 ? setTaglineIndex(0) : setTaglineIndex(taglineIndex+1);
    }

    return (
        <div className='toggler'>
          <div className="arrow" onClick={slideBack}>
            <i className="fa fa-arrow-left"></i>
          </div>

          <div className="tagline">
            {taglines[taglineIndex]}
          </div>

          <div className="arrow" onClick={slideForward}>
            <i className="fa fa-arrow-right"></i>
          </div>
        </div>
    );
}