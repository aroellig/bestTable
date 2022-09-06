import React from 'react';

const RestaurantIndexItem = ({restaurant}) => {
    return (
        <div>
            <li>
                <h1>{restaurant.name}</h1>
            </li>
        </div>
    )
}

export default RestaurantIndexItem