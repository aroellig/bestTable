import React from 'react';
import {useEffect} from 'react'
import {fetchRestaurant, fetchRestaurants} from "../../actions/restaurant_actions"
import {useSelector, useDispatch,} from 'react-redux';
import {useLocation, useParams, useNavigate} from 'react-router-dom';


const restaurantShow = () => {
    debugger
const dispatch =  useDispatch()
const params = useParams();
console.log(params)
const location = useLocation()
  const urlArr = location.pathname.toString().split('/')
  const id = parseInt(urlArr[urlArr.length - 1])
  const getRestaurant = (id) => {
    dispatch(fetchRestaurant(id))
    .then(response => console.log(response))
  }

useEffect(() => {
getRestaurant(id)
}, [])

    
   
}

export default restaurantShow