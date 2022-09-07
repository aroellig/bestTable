import React from 'react';
import {Link} from 'react-router-dom'
const RestaurantIndexItem = ({restaurant}) => {
    return (
        <div>
            <li>
                <Link to={`/restaurant/${restaurant.id}`}>{restaurant.name}</Link>
            </li>
        </div>
    )
}

export default RestaurantIndexItem