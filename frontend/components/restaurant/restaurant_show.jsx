import React from 'react';
import {useEffect, useState} from 'react'
import {fetchRestaurant, fetchRestaurants} from "../../actions/restaurant_actions"
import {useSelector, useDispatch,} from 'react-redux';
import {useLocation, useParams, useNavigate} from 'react-router-dom';


const restaurantShow = () => {
const dispatch =  useDispatch()
const params = useParams();
console.log(params)
const location = useLocation()
const [restaurant, setRestaurant] = useState({})
  const id = parseInt(params.restaurantId)
  const getRestaurant = (id) => {
    dispatch(fetchRestaurant(id))
    .then(response => setRestaurant(response.restaurant))
  }

useEffect(() => {
getRestaurant(id)
}, [])

    console.log(restaurant)
   
}

export default restaurantShow