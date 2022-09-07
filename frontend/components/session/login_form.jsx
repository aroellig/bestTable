import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import {useHistory} from 'react-router'
import {useState, useEffect} from 'react'
import { withRouter, useNavigate } from 'react-router-dom'
import {login} from '../../actions/session_actions';

const LoginForm = () => {
    const[data, setData] = useState({
        username: "",
        password: "",
        email: ""
    })

    const dispatch = useDispatch()
  
    const navigate = useNavigate()
 
    const errors = useSelector(state => state.errors.session)



    function changeHandler(e)  {
        const newdata={...data}
        newdata[e.target.name] = e.target.value
        setData(newdata)
        }



        function submitHandler(e) {
            e.preventDefault();
            const user = Object.assign({}, data);
            dispatch(login(user))
            .then(navigate("/home"))
        }

    return(
        <div>
        <form onSubmit={(e) => submitHandler(e)}>
        <div>
            <input type="text" name="username" placeholder="username" value={data.username} onChange={(e) => changeHandler(e)}/>
        </div>
        <div>
            <input type="text" name="password" placeholder="password" value={data.password} onChange={(e) => changeHandler(e)}/>
        </div>
        <div>
            <input type="text" name="email" placeholder="email" value={data.email} onChange={(e) => changeHandler(e)}/>
        </div>
        <button type="submit">Submit</button>
    </form>
    </div>
    )
}

export default LoginForm