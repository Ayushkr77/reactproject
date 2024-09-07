import { useState } from "react";

function Card({id, image, info, price, name, removeTour}) {

    const [readmore,setReadmore]=useState(false);
    const description= readmore?info:`${info.substring(0,200)}...`; // we've added 3 dots for read more, that will be visible on UI. And we've used ternary operator i.e., if readmore is true, then show whole description and when it is false show till 200 characters only.

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">Rs. {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="decription">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore?'show less':'read more'}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={()=> removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;