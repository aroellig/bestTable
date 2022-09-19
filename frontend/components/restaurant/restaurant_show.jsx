import React from 'react';
import {useEffect, useState} from 'react'
import {fetchRestaurant, fetchRestaurants} from "../../actions/restaurant_actions"
import {useSelector, useDispatch,} from 'react-redux';
import { useParams} from 'react-router-dom';
import {getUser} from '../../actions/session_actions'


const restaurantShow = () => {
const dispatch =  useDispatch()
const params = useParams();
const [user, setUser] = useState({})
const sessionId = useSelector(state => state.session.id)
const [restaurant, setRestaurant] = useState({})
  const id = parseInt(params.restaurantId)
  const getRestaurant = (id) => {
    dispatch(fetchRestaurant(id))
    .then(response => setRestaurant(response.restaurant))
  }



useEffect(() => {
getRestaurant(id)
}, [])
console.log(sessionId)
    return (
        <div>
        <h1>{restaurant.name}</h1>
        <h2>{restaurant.location}</h2>
        <h3>{restaurant.tables}</h3>
        </div>
    )
   
}

export default restaurantShow