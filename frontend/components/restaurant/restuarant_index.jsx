import React, {useEffect, useState} from 'react';
import {fetchRestaurants} from '../../actions/restaurant_actions';

const RestaurantIndex = () => {
    const [restaurants, setRestaurants] = useState([]);
    
    useEffect(() => {
       getRestaurants()
    }, [])

    const getRestaurants =  () => {
    const res = fetchRestaurants();
    setRestaurants(res)
    }
    console.log(restaurants)
    return (
        <div>
<h1>restaurants</h1>
</div>
    )
}

export default RestaurantIndex;