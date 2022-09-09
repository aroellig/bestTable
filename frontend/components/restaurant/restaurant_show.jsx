import React from 'react';
import {useEffect} from 'react'
import {fetchRestaurant, fetchRestaurants} from "../../actions/restaurant_actions"
import {useSelector, useDispatch,} from 'react-redux';
import {useLocation} from 'react-router-dom'

const restaurantShow = () => {
    
const dispatch =  useDispatch()
  const location = useLocation()
  const urlArr = location.pathname.toString().split('/')
  const id = urlArr[urlArr.length - 1]
  const getRestaurant = (id) => {
    dispatch(fetchRestaurant(id))
    .then(response => console.log(response))
  }

useEffect(() => {
getRestaurant(location.pathname)
}, [])

    
   
}

export default restaurantShow