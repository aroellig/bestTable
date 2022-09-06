import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchRestaurants} from '../../actions/restaurant_actions';

const RestaurantIndex = () => {
    const [restaurantsList, setRestaurants] = useState([]);
    const dispatch = useDispatch()
    
  const makeArr = (obj) => {
    let arr = [];
    for(let key in obj){
      arr.push(obj[key])
    }
    return arr
  }

    useEffect(() => {
       getRestaurants()
    }, [])

    const getRestaurants =  () => {
      dispatch(fetchRestaurants())
      .then(response => setRestaurants(makeArr(response.restaurants)))
    }

   
    return (
        <div>
    <ul>
      {restaurantsList.map(restaurant => <li>{restaurant.name}</li>)}
    </ul>
</div>
    )
}

export default RestaurantIndex;