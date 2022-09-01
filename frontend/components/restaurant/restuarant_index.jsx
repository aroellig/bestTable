import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchRestaurants} from '../../actions/restaurant_actions';

const RestaurantIndex = () => {
    const [restaurants, setRestaurants] = useState([]);
    const dispatch = useDispatch()
    
    useEffect(() => {
       getRestaurants()
    }, [])

    const getRestaurants =  () => {
      dispatch(fetchRestaurants());
    }
    
    return (
        <div>
<h1>restaurants</h1>
</div>
    )
}

export default RestaurantIndex;