import React from "react";
import {logout} from '../../actions/session_actions';
import {useSelector, useDispatch} from 'react-redux';
import { withRouter,  useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
const Home = () => {    

    const dispatch = useDispatch()
  
    const navigate = useNavigate()
 
    const errors = useSelector(state => state.errors.session)

    const user = useSelector(action => action.currentUser)

  function  logoutUser(e) {
        e.preventDefault();
       dispatch(logout(user))
       .then(navigate("/"))
       
      }

    return(
        <div className="homepage">
   <h1>HOME</h1>
        <div  className="logoutbtn">
           <button onClick={(e) => logoutUser(e)}>logout</button>
          </div>
        </div>
    )}
    export default Home;