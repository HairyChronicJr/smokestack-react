import React from "react";

function Rating({rating}) {
    console.log(rating);
    const fullStars = Math.trunc(rating);
    let halfStars = 0;
    if (rating - fullStars > 0) {
        halfStars = 1;
    }
    const emptyStars = 5 - halfStars - rating;
    const starArray = [];
    for (let i=0; i < fullStars; i++) {
        starArray.push(<span className="fa fa-star text-warning"></span>);
    }
    if (halfStars > 0) {
        starArray.push(<span className="fa fa-star-half-o text-warning"></span>)
    }
    for (let i=0; i < emptyStars; i++) {
        starArray.push(<span className="fa fa-star-o text-warning"></span>);
    }
    return (
        <>
            {starArray}
        </>
    )
}

export default Rating;