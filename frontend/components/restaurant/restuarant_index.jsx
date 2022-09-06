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

    console.log(restaurantsList)
    return (
        <div>
<h1>restaurants</h1>
</div>
    )
}

export default RestaurantIndex;