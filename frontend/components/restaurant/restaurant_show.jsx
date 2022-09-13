import React from 'react';
import {useEffect, useState} from 'react'
import {fetchRestaurant, fetchRestaurants} from "../../actions/restaurant_actions"
import {useSelector, useDispatch,} from 'react-redux';
import { useParams} from 'react-router-dom';
import { useSession } from "@clerk/clerk-react";

const restaurantShow = () => {
const dispatch =  useDispatch()
const params = useParams();
console.log(params)
const [restaurant, setRestaurant] = useState({})
  const id = parseInt(params.restaurantId)
  const getRestaurant = (id) => {
    dispatch(fetchRestaurant(id))
    .then(response => setRestaurant(response.restaurant))
  }
const session = useSession();
console.log(session)
useEffect(() => {
getRestaurant(id)
}, [])

    return (
        <div>
        <h1>{restaurant.name}</h1>
        <h2>{restaurant.location}</h2>
        <h3>{restaurant.tables}</h3>
        </div>
    )
   
}

export default restaurantShow