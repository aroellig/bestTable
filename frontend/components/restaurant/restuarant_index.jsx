import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchRestaurants} from '../../actions/restaurant_actions';
import RestaurantIndexItem from './restaurant_index_item'

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
      {restaurantsList.map(restaurant => <RestaurantIndexItem restaurant={restaurant} key={restaurant.id} />)}
    </ul>
</div>
    )
}

export default RestaurantIndex;