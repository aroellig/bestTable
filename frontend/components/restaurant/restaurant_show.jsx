import React from 'react';
import {useEffect} from 'react'
import {fetchRestaurant, fetchRestaurants} from "../../actions/restaurant_actions"
import {useSelector, useDispatch} from 'react-redux';

const restaurantShow = () => {
    const restaurant = useSelector(state => state.entities.restaurants)
    useEffect(() => {
        fetchRestaurant(restaurantId)
    }, [])
    
   
}

export default restaurantShow