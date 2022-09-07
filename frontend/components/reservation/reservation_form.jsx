import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react'
import { withRouter, useNavigate } from 'react-router-dom'
import {createReservation} from '../../actions/reservation_actions';

const reservationForm = () => {
    const user = useSelector(state => state.entities.users)

    const[data, setData] = useState({
        name: "",
        number: "",
        restaurant_id: "",
        user_id: Object.keys(user)[0]
    })

    const dispatch = useDispatch()
}

export default reservationForm